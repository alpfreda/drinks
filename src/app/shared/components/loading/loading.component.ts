import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'dk-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {}
