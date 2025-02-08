import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion',
  standalone: false,
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.scss'
})
export class GestionComponent {
 pedido = [
  { name: 'Mil Hojas', description: 'Postre', price: '1.00', id: 2240 },
  { name: 'Tiramisú', description: 'Postre', price: '2.50', id: 2241 },
  { name: 'Cheesecake', description: 'Postre', price: '3.00', id: 2242 },
  { name: 'Brownie', description: 'Postre', price: '2.00', id: 2243 },
  { name: 'Flan', description: 'Postre', price: '1.50', id: 2244 }
];

totalFactura: number = 0;
cantidades: { [key: number]: number } = {}; // Objeto para almacenar cantidades por ID

mostrarModal: boolean = false;
numeroMesa: string = '';
nombreCliente: string = '';
numeroOrden: string = '';

constructor() {
  this.inicializarCantidades();
}

inicializarCantidades() {
  this.pedido.forEach(producto => {
    this.cantidades[producto.id] = 0; // Todas las cantidades inician en 0
  });
}

calcularTotal() {
  this.totalFactura = this.pedido.reduce((acc, item) => 
    acc + (parseFloat(item.price) * (this.cantidades[item.id] || 0)), 0);
}

enviarOrden() {
  // Lógica para enviar la orden
  console.log('Orden enviada');
  this.mostrarModal = false;
}

closeModal(event: MouseEvent) {
  if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
    this.mostrarModal = false;
  }
}
}
