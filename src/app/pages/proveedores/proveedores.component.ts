import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedor.component.scss', '../../../scss/cards/cards.scss'],
  standalone: false,
})
export class ProveedoresComponent implements OnInit {
  // Array de usuarios para mostrar en las tarjetas
  users = [
    {
      name: 'Vegeta',
      description: 'Proveedor de productos para la cocina.',
      profileImage: '../../../assets/img/theme/vegeta.png',
      hoverImage: '../../../assets/img/theme/vegeta2.png',
      Role: 'Administrador'
    },
    {
      name: 'Goku',
      description: 'Proveedor de ingredientes y herramientas de cocina.',
      profileImage: '../../../assets/img/theme/goku.png',
      hoverImage: '../../../assets/img/theme/goku2.png',
      showFullDescription: false,
      Role: 'Cocina'
    },
    {
      name: 'Gohan',
      description: 'Proveedor de productos para el área de servicio.',
      profileImage: '../../../assets/img/theme/gohan.png',
      hoverImage: '../../../assets/img/theme/gohan2.png',
      showFullDescription: false,
      Role: 'Servicio'
    },
  ];

  // Variable para almacenar el usuario seleccionado para edición o nuevo usuario
  selectedUser: any = {};

  // Referencia al modal
  @ViewChild('addModal') addModalRef: ElementRef;
  @ViewChild('editModal') editModalRef: ElementRef;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  // Función para cambiar la imagen de la tarjeta cuando el mouse entra
  onMouseEnter(i: number): void {
    const cardImage = document.querySelector(`#card-img-${i}`) as HTMLElement;
    cardImage.style.backgroundImage = `url(${this.users[i].hoverImage})`;
  }

  // Función para restaurar la imagen cuando el mouse sale
  onMouseLeave(i: number): void {
    const cardImage = document.querySelector(`#card-img-${i}`) as HTMLElement;
    cardImage.style.backgroundImage = `url(${this.users[i].profileImage})`;
  }

  // Función para abrir el modal de agregar o editar
  openModal(user: any): void {
    if (user) {
      // Editar usuario
      this.selectedUser = { ...user };
      const modal = new bootstrap.Modal(this.editModalRef.nativeElement);
      modal.show();
    } else {
      // Agregar nuevo usuario
      this.selectedUser = {
        name: '',
        description: '',
        profileImage: '',
        hoverImage: '',
        Role: ''
      };
      const modal = new bootstrap.Modal(this.addModalRef.nativeElement);
      modal.show();
    }
  }

  // Cerrar el modal
  closeModal(): void {
    const modal = bootstrap.Modal.getInstance(this.addModalRef.nativeElement) || bootstrap.Modal.getInstance(this.editModalRef.nativeElement);
    modal.hide();
  }

  // Función para agregar un nuevo usuario
  addUser(): void {
    if (this.selectedUser.name && this.selectedUser.description) {
      this.users.push({ ...this.selectedUser });
      this.cdRef.detectChanges();
      this.closeModal();
    } else {
      alert('Debe completar todos los campos.');
    }
  }

  // Función para actualizar un usuario existente
  updateUser(): void {
    if (this.selectedUser.name && this.selectedUser.description) {
      const index = this.users.findIndex(user => user.name === this.selectedUser.name);
      if (index !== -1) {
        this.users[index] = { ...this.selectedUser };
      }
      this.cdRef.detectChanges();
      this.closeModal();
    } else {
      alert('Debe completar todos los campos.');
    }
  }
}
