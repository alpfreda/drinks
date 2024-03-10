import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DrinkEntity } from '@features/drinks/store/drink.models';

@Component({
  selector: 'dk-drink-details-info-pres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drink-details-info-pres.component.html',
  styleUrl: './drink-details-info-pres.component.scss',
})
export class DrinkDetailsInfoPresComponent {
  @Input() drinkDetail!: DrinkEntity;
}
