import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Home
import { HomePage } from './pages/home/home';

// Error
import { ErrorPage } from './pages/error/error';
import { UsersComponent } from './pages/users/users.component';
import { MenuPage } from './pages/menu/menu';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { InventarioPage } from './pages/inventario/inventario';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage, data: { title: 'Home'} },
  { path: 'users', component: UsersComponent, data: { title: 'Users'} },
  { path: 'menus', component: MenuPage, data: { title: 'menu'} },
  { path: 'proveedores', component: ProveedoresComponent, data: { title: 'proveedores'} },
  { path: 'personal', component: UsersComponent, data: { title: 'personal'} },
  { path: 'inventarios', component: InventarioPage, data: { title: 'inventarios'} },


  
	{ path: '**', component: ErrorPage, data: { title: '404 Error'} }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }
