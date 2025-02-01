import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.html',
  styleUrls: ['./inventario.component.scss'],
  standalone: false
})
export class InventarioPage implements OnInit {
  products = []; // Array de productos
  currentPage = 1; // Página actual
  itemsPerPage = 10; // Cantidad de productos por página
  totalItems = 0; // Número total de productos
  totalPages = 0; // Número total de páginas
  paginatedProducts = []; // Productos de la página actual

  constructor() {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // Simulación de carga de productos
  loadProducts() {
    // Supón que estos son los productos obtenidos desde una API
    this.products = [
      { id: 1, name: 'Arroz Rico', inventory: 10, type: 'Carbohidratos', vendor: 'Juan Pérez', image: 'https://elahorro.com.ec/web/image/product.template/88640/image' },
      { id: 2, name: 'Pollo', inventory: 5, type: 'Proteína', vendor: 'Pedro ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRMjpHOuza_FmQGEChqH90Cmp5JR9ZHtBMUA&s' },
      // Agrega más productos
    ];
    this.totalItems = this.products.length;
    this.calculateTotalPages();
    this.paginateProducts();
  }

  // Calcular el número total de páginas
  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
  }

  // Actualizar los productos mostrados según la página actual
  paginateProducts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedProducts = this.products.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // Cambiar la página
  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginateProducts();
    }
  }
}
