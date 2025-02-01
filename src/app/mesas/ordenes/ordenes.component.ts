import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import * as bootstrap from 'bootstrap';

interface Order {
  id: number;
  table: number;
  client: string;
  status: string;
  mensaje: string;
}

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss'],
  standalone: false
})
export class OrdenesComponent implements OnInit {
  orders: Order[] = [
    { id: 220, table: 15, client: 'Juan Soto', status: 'ENVIADO A COCINA', mensaje: 'Traer jugos extras' },
    { id: 230, table: 12, client: 'Pedro Gómez', status: 'LISTO PARA DESPACHO', mensaje: 'Sin cebolla' },
    { id: 240, table: 8, client: 'Ana López', status: 'ENTREGADO', mensaje: 'Agregar cubiertos' },
    { id: 222, table: 1, client: 'Luis Fernández', status: 'ENVIADO A COCINA', mensaje: 'Jugo de naranja' },
  ];

  selectedOrder: Order = {} as Order;
  isEditModalOpen: boolean = false;
  isDeleteModalOpen: boolean = false;
  isAddModalOpen: boolean = false;

  @ViewChild('addModal') addModalRef!: ElementRef;
  @ViewChild('editModal') editModalRef!: ElementRef;
  @ViewChild('deleteModal') deleteModalRef!: ElementRef;

  constructor(private cdref: ChangeDetectorRef) {}

  ngOnInit(): void {}

  // Abrir modal para agregar orden
  openAddModal(): void {
    this.isAddModalOpen = true;
    this.selectedOrder = { id: 0, table: 0, client: '', status: 'ENVIADO A COCINA', mensaje: '' };
    const modal = new bootstrap.Modal(this.addModalRef.nativeElement);
    modal.show();
  }

  // Abrir modal para editar orden
  openEditModal(order: Order): void {
    this.isEditModalOpen = true;
    this.selectedOrder = { ...order };
    const modal = new bootstrap.Modal(this.editModalRef.nativeElement);
    modal.show();
  }

  // Cerrar cualquier modal
  closeModal(): void {
    if (this.isEditModalOpen) {
      const modal = bootstrap.Modal.getInstance(this.editModalRef.nativeElement);
      modal?.hide();
      this.isEditModalOpen = false;
    }
    if (this.isAddModalOpen) {
      const modal = bootstrap.Modal.getInstance(this.addModalRef.nativeElement);
      modal?.hide();
      this.isAddModalOpen = false;
    }
  }

  // Agregar una nueva orden
  addOrder(): void {
    if (this.selectedOrder) {
      this.selectedOrder.id = this.generateOrderId();
      this.orders.push({ ...this.selectedOrder });
      this.closeModal();
    }
  }

  // Actualizar una orden
  updateOrder(): void {
    if (this.selectedOrder) {
      const index = this.orders.findIndex(order => order.id === this.selectedOrder.id);
      if (index !== -1) {
        this.orders[index] = { ...this.selectedOrder };
      }
      this.closeModal();
    }
  }

  // Abrir modal de eliminación
  openDeleteModal(order: Order): void {
    this.selectedOrder = { ...order };
    this.isDeleteModalOpen = true;
    const modal = new bootstrap.Modal(this.deleteModalRef.nativeElement);
    modal.show();
  }

  // Eliminar una orden
  deleteOrder(): void {
    const index = this.orders.findIndex(order => order.id === this.selectedOrder.id);
    if (index !== -1) {
      this.orders.splice(index, 1);
      this.cdref.detectChanges();
    }
    this.closeDeleteModal();
  }

  // Cerrar modal de eliminación
  closeDeleteModal(): void {
    const modal = bootstrap.Modal.getInstance(this.deleteModalRef.nativeElement);
    modal?.hide();
    this.isDeleteModalOpen = false;
  }

  // Generar ID para nueva orden
  generateOrderId(): number {
    return this.orders.length > 0 ? Math.max(...this.orders.map(order => order.id)) + 1 : 1;
  }

  // Obtener clases para el estado
  getStatusClass(status: string): string {
    switch (status) {
      case 'ENVIADO A COCINA':
        return 'status-enviado-a-cocina';
      case 'LISTO PARA DESPACHO':
        return 'status-listo-para-despacho';
      case 'ENTREGADO':
        return 'status-entregado';
      default:
        return '';
    }
  }
}
