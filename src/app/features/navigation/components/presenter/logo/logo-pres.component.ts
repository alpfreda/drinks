import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'dk-logo-pres',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './logo-pres.component.html',
  styleUrl: './logo-pres.component.scss',
})
export class LogoPresComponent {
  @Input() name!: string;
  @Input() logo!: string;
}
