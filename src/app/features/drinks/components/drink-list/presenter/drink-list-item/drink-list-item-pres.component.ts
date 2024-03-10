import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DrinkEntity } from '@features/drinks/store/drink.models';

@Component({
  selector: 'dk-drink-list-item-pres',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './drink-list-item-pres.component.html',
  styleUrl: './drink-list-item-pres.component.scss',
})
export class DrinkListPresComponent {
  @Input() drink!: DrinkEntity;
}
