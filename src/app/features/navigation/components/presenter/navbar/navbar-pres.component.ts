import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationLink } from 'src/app/app-config.model';

@Component({
  selector: 'dk-navbar-pres',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar-pres.component.html',
  styleUrl: './navbar-pres.component.scss',
})
export class NavbarPresComponent {
  @Input() links!: NavigationLink[];
}
