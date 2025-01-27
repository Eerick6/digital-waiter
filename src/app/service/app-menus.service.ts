import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AppMenuService {
	getAppMenus() {
		return [{
			'icon': 'fa fa-sitemap',
			'title': 'Home',
			'url': '/home'
		},
		{
			'icon': 'fa fa-users',
			'title': 'Gestión de Usuarios',
			'url': '/users'
		}];
	}
}