import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.component.scss',
    './modal-menu.component.scss'
  ],
  standalone: false
})

export class HomePage implements OnInit {
  // Array de usuarios para mostrar en las tarjetas
  cartas = [
    {
      day: 'Lunes',
      description: 'Comienza la semana con un menú lleno de sabor y energía.',
      profileImage: '../../../assets/img/theme/lunes.jpeg',
      hoverImage: '../../../assets/img/theme/lunes2.jpeg',
      showFullDescription: false,
      sopa: 'Caldo de gallina',
      sopa2: 'Crema de zapallo',
      platoFuerte: 'Seco de pollo',
      platoFuerte2: 'Arroz con carne asada',
      postre: 'Gelatina',
      postre2: 'Flan',
      jugo: 'Jugo de naranja',
      jugo2: 'Jugo de mora',
      precio: '$3,50',
      estado: 'En Stock'
    },
    {
      day: 'Martes',
      description: 'Disfruta de un menú refrescante para acompañar tu día.',
      profileImage: '../../../assets/img/theme/martes.jpeg',
      hoverImage: '../../../assets/img/theme/martes2.jpeg',
      showFullDescription: false,
      sopa: 'Sopa de lentejas',
      sopa2: 'Crema de espárragos',
      platoFuerte: 'Lasaña de carne',
      platoFuerte2: 'Encebollado',
      postre: 'Torta de chocolate',
      postre2: 'Mousse de maracuyá',
      jugo: 'Jugo de sandía',
      jugo2: 'Limonada',
      precio: '$3,50',
      estado: 'Agotado'
    },
    {
      day: 'Miércoles',
      description: 'Un menú especial para revitalizar tu mitad de semana.',
      profileImage: '../../../assets/img/theme/miercoles.jpeg',
      hoverImage: '../../../assets/img/theme/miercoles2.jpeg',
      showFullDescription: false,
      sopa: 'Sopa de choclo',
      sopa2: 'Consomé de pollo',
      platoFuerte: 'Filete de pescado al vapor',
      platoFuerte2: 'Cazuela de mariscos',
      postre: 'Helado',
      postre2: 'Arroz con leche',
      jugo: 'Jugo de tamarindo',
      jugo2: 'Jugo de piña',
      precio: '$3,50',
      estado: 'En Stock'
    
    },
    {
      day: 'Jueves',
      description: 'Sabe el fin de semana con sabores intensos y frescos.',
      profileImage: '../../../assets/img/theme/jueves.jpeg',
      hoverImage: '../../../assets/img/theme/jueves2.jpeg',
      showFullDescription: false,
      sopa: 'Locro de papa',
      sopa2: 'Caldo de pescado',
      platoFuerte: 'Chuleta de cerdo con arroz',
      platoFuerte2: 'Tallarines al pesto',
      postre: 'Cheesecake de frutos rojos',
      postre2: 'Tres leches',
      jugo: 'Jugo de guayaba',
      jugo2: 'Jugo de durazno',
      precio: '$3,50',
      estado: 'En Stock'
    },
    {
      day: 'Viernes',
      description: 'Celebra el viernes con un menú lleno de delicias.',
      profileImage: '../../../assets/img/theme/viernes.jpeg',
      hoverImage: '../../../assets/img/theme/viernes2.jpeg',
      showFullDescription: false,
      sopa: 'Sancocho',
      sopa2: 'Sopa de frijoles',
      platoFuerte: 'Fritada con mote',
      platoFuerte2: 'Pollo al horno',
      postre: 'Volcán de chocolate',
      postre2: 'Tiramisú',
      jugo: 'Jugo de melón',
      jugo2: 'Jugo de mandarina',
      precio: '$3,50',
      estado: 'En Stock'
    },
    {
      day: 'Sábado',
      description: 'El sabor del fin de semana, perfecto para compartir.',
      profileImage: '../../../assets/img/theme/sabado.jpeg',
      hoverImage: '../../../assets/img/theme/sabado2.jpeg',
      showFullDescription: false,
      sopa: 'Sopa marinera',
      sopa2: 'Consomé de res',
      platoFuerte: 'Arroz con camarones',
      platoFuerte2: 'Ceviche mixto',
      postre: 'Brownies',
      postre2: 'Pionono',
      jugo: 'Jugo de uva',
      jugo2: 'Jugo de limón con hierbabuena',
      precio: '$3,50',
      estado: 'Agotado'
    },
    {
      day: 'Domingo',
      description: 'Relájate y disfruta con un menú dominical lleno de sabor.',
      profileImage: '../../../assets/img/theme/domingo.jpeg',
      hoverImage: '../../../assets/img/theme/domingo2.jpeg',
      showFullDescription: false,
      sopa: 'Caldo de bolas',
      sopa2: 'Sopa de queso',
      platoFuerte: 'Hornado',
      platoFuerte2: 'Seco de chivo',
      postre: 'Pan de banano',
      postre2: 'Bizcocho casero',
      jugo: 'Morocho (bebida)',
      jugo2: 'Jugo de papaya',
      precio: '$3,50',
    },
  ];

  // Variable para almacenar el usuario seleccionado para edición
  selectedCarta: any = {};

  // Refencia al modal
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

  // Función para alternar la descripción larga del usuario
  toggleDescription(i: number): void {
    this.cartas[i].showFullDescription = !this.cartas[i].showFullDescription;
  }

  // Abrir el modal y asignar el usuario seleccionado a selectedUser
  openModal(carta: any): void {
    this.selectedCarta = { ...carta }; // Hacemos una copia del usuario para no modificar el original
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
    const index = this.cartas.findIndex(user => user.day === this.selectedCarta.day);
    if (index !== -1) {
      this.cartas[index] = { ...this.selectedCarta }; // Actualizamos los datos
    }
    this.cdRef.detectChanges();  // Forzar la detección de cambios
    this.closeModal();
  }
}

