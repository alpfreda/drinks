import { Routes } from '@angular/router';
import { DrinkEffects } from '@features/drinks/store/drink.effects';
import * as fromDrink from '@features/drinks/store/drink.reducer';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

export const drinkRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@features/drinks/drink-feature.routes').then(
        ({ drinkFeatureRoutes }) => drinkFeatureRoutes
      ),
    providers: [
      provideState(fromDrink.DRINK_FEATURE_KEY, fromDrink.drinkReducer),
      provideEffects(DrinkEffects),
    ],
  },
];
