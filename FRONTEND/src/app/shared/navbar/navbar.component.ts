import { NavLink } from './../../interfaces/NavLink';
import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   public navLinks: NavLink[] | undefined;
  constructor(private navService: NavService) {}

  ngOnInit(): void {
    this.navLinks = this.navService.getNavLinks();
  }
}
