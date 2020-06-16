import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Home',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/', title: 'BackToWork',  icon:'ni-planet text-blue', class: '' },
    { path: '/', title: 'Visitors',  icon:'ni-pin-3 text-orange', class: 'disabled' },
    { path: '/', title: 'Students',  icon:'ni-hat-3 text-green', class: 'disabled' },
    { path: '/', title: 'Analysis',  icon:'ni-money-coins text-blue', class: 'disabled' },
    { path: '/', title: 'Setup',  icon:'ni-app text-info', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
