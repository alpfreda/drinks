import { createAction, props } from '@ngrx/store';
import { DrinkEntity } from './drink.models';

export const loadDrinks = createAction('[Drinks] Load Drinks', props<{ typeSearch: string }>());

export const loadDrinksSuccess = createAction('[Drinks] Load Drinks Success', props<{ drinks: DrinkEntity[] }>());

export const loadDrinksFailure = createAction('[Drinks] Load Drinks Failure', props<{ error: string }>());

export const loadDrinkDetail = createAction('[Drinks] Load Detail', props<{ id: string }>());

export const loadDrinkDetailSuccess = createAction('[Drinks] Load Detail Success', props<{ drinkDetail: DrinkEntity }>());

export const loadDrinkDetailFail = createAction('[Drinks] Load Detail Fail', props<{ error: string }>());

export const setSearchType = createAction('[Drinks] Set Search Type', props<{ typeSearch: string }>());
