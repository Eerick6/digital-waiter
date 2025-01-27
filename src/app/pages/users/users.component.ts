import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss', '../../../scss/cards/cards.scss'],
  standalone: false,
})
export class UsersComponent implements OnInit {
  // Array de usuarios para mostrar en las tarjetas
  users = [
    {
      name: 'Vegeta',
      description: 'Príncipe de los Saiyans, conocido por su orgullo y poder.',
      profileImage: '../../../assets/img/theme/vegeta.png',
      hoverImage: '../../../assets/img/theme/vegeta2.png',
      showFullDescription: false,
    },
    {
      name: 'Goku',
      description: 'Héroe de la Tierra, siempre en busca de aventuras.',
      profileImage: '../../../assets/img/theme/goku.png',
      hoverImage: '../../../assets/img/theme/goku2.png',
      showFullDescription: false,
    },
    {
      name: 'Gohan',
      description: 'Hijo de Goku, gran poder en el combate.',
      profileImage: '../../../assets/img/theme/gohan.png',
      hoverImage: '../../../assets/img/theme/gohan2.png',
      showFullDescription: false,
    },
  ];

  // Variable para almacenar el usuario seleccionado para edición
  selectedUser: any = {};

  // Refencia al modal
  @ViewChild('editModal') modalRef: ElementRef;

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

  // Función para alternar la descripción larga del usuario
  toggleDescription(i: number): void {
    this.users[i].showFullDescription = !this.users[i].showFullDescription;
  }

  // Abrir el modal y asignar el usuario seleccionado a selectedUser
  openModal(user: any): void {
    this.selectedUser = { ...user }; // Hacemos una copia del usuario para no modificar el original
    const modal = new bootstrap.Modal(this.modalRef.nativeElement);
    modal.show();
  }

  // Cerrar el modal
  closeModal(): void {
    const modal = bootstrap.Modal.getInstance(this.modalRef.nativeElement);
    modal.hide();
  }

  // Función para actualizar el usuario (visualmente y dentro del array)
  updateUser(): void {
    const index = this.users.findIndex(user => user.name === this.selectedUser.name);
    if (index !== -1) {
      this.users[index] = { ...this.selectedUser }; // Actualizamos los datos
    }
    this.cdRef.detectChanges();  // Forzar la detección de cambios
    this.closeModal();
  }
}
