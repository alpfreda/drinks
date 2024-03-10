import { Route } from '@angular/router';
import { DrinkService } from '@features/drinks/drink.service';
import { DrinkEffects } from '@features/drinks/store/drink.effects';
import * as fromDrink from '@features/drinks/store/drink.reducer';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'drinks',
  },
  {
    path: 'drinks',
    loadChildren: () => import('@pages/drinks/drink.routes').then(({ drinkRoutes }) => drinkRoutes),
    providers: [DrinkService, provideState(fromDrink.DRINK_FEATURE_KEY, fromDrink.drinkReducer), provideEffects(DrinkEffects)],
  },
  {
    path: 'about',
    loadComponent: () => import('@pages/about/about.component').then((component) => component.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('@pages/contact/contact.component').then((component) => component.ContactComponent),
  },
];
