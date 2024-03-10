import { Routes } from '@angular/router';
import { DrinkDetailsContComponent } from './components/drink-details/container/drink-details-cont.component';
import { DrinkListContComponent } from './components/drink-list/container/drink-list-cont.component';

export const drinkFeatureRoutes: Routes = [
  { path: '', component: DrinkListContComponent },
  { path: ':id', component: DrinkDetailsContComponent },
];
