import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Intro } from 'src/app/app-config.model';

@Component({
  selector: 'dk-drink-list-intro-pres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drink-list-intro-pres.component.html',
  styleUrl: './drink-list-intro-pres.component.scss',
})
export class DrinkListIntroPresComponent {
  @Input() intro!: Intro;
}
