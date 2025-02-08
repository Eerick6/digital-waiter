import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion',  // Este es el nombre del componente
  standalone: false,  // Establece que este componente no es independiente (puede tener dependencias)
  templateUrl: './gestion.component.html',  // Archivo HTML asociado a este componente
  styleUrls: ['./gestion.component.scss']  // Archivo de estilos asociados a este componente
})
export class GestionComponent {
  // Array de productos en el pedido
  _pedido = [
    { name: 'Mil Hojas', description: 'Postre', price: '1.00', id: 2240 },
    { name: 'Tiramisú', description: 'Postre', price: '2.50', id: 2241 },
    { name: 'Cheesecake', description: 'Postre', price: '3.00', id: 2242 },
    { name: 'Brownie', description: 'Postre', price: '2.00', id: 2243 },
    { name: 'Flan', description: 'Postre', price: '1.50', id: 2244 }
  ];

  // Total de la factura
  _totalFactura: number = 0;
  // Objeto para almacenar las cantidades por ID de producto
  _cantidades: { [key: number]: number } = {}; 

  // Controla si el modal está visible o no
  _mostrarModal: boolean = false;
  
  // Datos de la mesa, cliente y número de orden
  _numeroMesa: string = '';
  _nombreCliente: string = '';
  _numeroOrden: string = '';

  constructor() {
    this._inicializarCantidades();  // Inicializa las cantidades de los productos en el pedido
  }

  // Método para inicializar las cantidades con validación
  _inicializarCantidades() {
    this._pedido.forEach(producto => {
      // Validar si el ID del producto es un número entero
      if (Number.isInteger(producto.id)) {
        this._cantidades[producto.id] = 0; 
      } else {
        console.error('ID de producto inválido:', producto.id);
      }
    });
  }

  // Método para calcular el total, validando los valores numéricos
  _calcularTotal() {
    this._totalFactura = this._pedido.reduce((acc, item) => {
      const price = parseFloat(item.price);
      const cantidad = this._cantidades[item.id] || 0;

      // Validar que el precio y la cantidad sean números válidos
      if (isNaN(price) || isNaN(cantidad)) {
        console.error(`Valor inválido en el producto: ${item.name}`);
        return acc;  // Si hay un valor inválido, no se suma
      }

      return acc + (price * cantidad);
    }, 0);
  }

  // Método para enviar la orden con validación de campos
  _enviarOrden() {
    // Validar que los campos no estén vacíos antes de enviar
    if (!this._numeroMesa || !this._nombreCliente || !this._numeroOrden) {
      console.error('Faltan datos en la orden');
      return;
    }

    console.log('Orden enviada');
    this._mostrarModal = false;  // Cierra el modal después de enviar la orden
  }

  // Método para cerrar el modal de manera segura
  _closeModal(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this._mostrarModal = false;  // Cierra el modal si se hace clic en el fondo 
    }
  }
}
