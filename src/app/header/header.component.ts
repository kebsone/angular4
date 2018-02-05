import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'da-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarCollapsed = true;
  constructor() { }

  ngOnInit() {
  }
  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}

