import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.component.scss', './modal-menu.component.scss'],
  standalone: false
})
export class MenuPage implements OnInit {
  // Array de cartas para mostrar en el menú
  cartas = [
    {
      day: 'Vegetariana',
      description: 'Comienza la semana con un menú lleno de sabor y energía.',
      profileImage: '../../../assets/img/theme/lunes.jpeg',
      hoverImage: '../../../assets/img/theme/lunes2.jpeg',
      showFullDescription: false
    },
    {
      day: 'Italiana',
      description: 'Disfruta de un menú refrescante para acompañar tu día.',
      profileImage: '../../../assets/img/theme/martes.jpeg',
      hoverImage: '../../../assets/img/theme/martes2.jpeg',
      showFullDescription: false
    },
    {
      day: 'Mariscos',
      description: 'Un menú especial para revitalizar tu mitad de semana.',
      profileImage: '../../../assets/img/theme/miercoles.jpeg',
      hoverImage: '../../../assets/img/theme/miercoles2.jpeg',
      showFullDescription: false
    },
    {
      day: 'Mexicana',
      description: 'Sabe el fin de semana con sabores intensos y frescos.',
      profileImage: '../../../assets/img/theme/jueves.jpeg',
      hoverImage: '../../../assets/img/theme/jueves2.jpeg',
      showFullDescription: false
    },
    {
      day: 'Ecuatoriana',
      description: 'Celebra el viernes con un menú lleno de delicias.',
      profileImage: '../../../assets/img/theme/viernes.jpeg',
      hoverImage: '../../../assets/img/theme/viernes2.jpeg',
      showFullDescription: false
    },
    {
      day: 'Mariscos',
      description: 'El sabor del fin de semana, perfecto para compartir.',
      profileImage: '../../../assets/img/theme/sabado.jpeg',
      hoverImage: '../../../assets/img/theme/sabado2.jpeg',
      showFullDescription: false
    },
    {
      day: 'Dominical',
      description: 'Relájate y disfruta con un menú dominical lleno de sabor.',
      profileImage: '../../../assets/img/theme/domingo.jpeg',
      hoverImage: '../../../assets/img/theme/domingo2.jpeg',
      showFullDescription: false
    }
  ];

  // Variable para almacenar el menú seleccionado
  selectedCarta: any = {};

  // Referencia al modal
  @ViewChild('editModal') modalRef: ElementRef;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  // Función para cambiar la imagen de la tarjeta cuando el mouse entra
  onMouseEnter(i: number): void {
    const cardImage = document.querySelector(`#card-img-${i}`) as HTMLElement;
    cardImage.style.backgroundImage = `url(${this.cartas[i].hoverImage})`;
  }

  // Función para restaurar la imagen cuando el mouse sale
  onMouseLeave(i: number): void {
    const cardImage = document.querySelector(`#card-img-${i}`) as HTMLElement;
    cardImage.style.backgroundImage = `url(${this.cartas[i].profileImage})`;
  }

  // Función para alternar la descripción larga del menú
  toggleDescription(i: number): void {
    this.cartas[i].showFullDescription = !this.cartas[i].showFullDescription;
  }

  // Función para abrir el modal y pasar los datos de la carta seleccionada
  openModal(carta: any): void {
    this.selectedCarta = { ...carta }; // Copiar los datos para edición
    const modal = new bootstrap.Modal(this.modalRef.nativeElement);
    modal.show();
  }

  // Función para cerrar el modal
  closeModal(): void {
    const modal = bootstrap.Modal.getInstance(this.modalRef.nativeElement);
    modal.hide();
  }

  // Función para actualizar el menú
  updateUser(): void {
    const index = this.cartas.findIndex(item => item.day === this.selectedCarta.day);
    if (index !== -1) {
      this.cartas[index] = { ...this.selectedCarta }; // Actualizar la carta seleccionada
    }
    this.cdRef.detectChanges(); // Forzar la detección de cambios
    this.closeModal(); // Cerrar modal después de actualización
  }

  // Método que será invocado desde el template
  saveChanges(): void {
    this.updateUser();  // Guarda los cambios al usuario seleccionado
  }
}
