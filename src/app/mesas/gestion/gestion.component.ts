import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion',
  standalone: false,
  
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.scss'
})
export class GestionComponent {
 pedido = [{
  name: 'Mil Hojas',
  description: 'Postre',
  price: '1,00',
  id: 2240
 },
 {
  name: 'Mil Hojas',
  description: 'Postre',
  price: '1,00',
  id: 2242
 },
]
}
