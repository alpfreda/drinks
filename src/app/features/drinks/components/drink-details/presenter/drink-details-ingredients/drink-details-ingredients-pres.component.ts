import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Ingredient } from '@features/drinks/store/drink.models';

@Component({
  selector: 'dk-drink-details-ingredients-pres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drink-details-ingredients-pres.component.html',
  styleUrl: './drink-details-ingredients-pres.component.scss',
})
export class DrinkDetailsIngredientsPresComponent {
  @Input() ingredients!: Ingredient[];
}
