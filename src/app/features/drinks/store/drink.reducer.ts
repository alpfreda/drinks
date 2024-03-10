import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as DrinkActions from './drink.actions';
import { DrinkEntity } from './drink.models';

export const DRINK_FEATURE_KEY = 'drink';

export interface DrinkState extends EntityState<DrinkEntity> {
  selectedId?: string;
  isLoading: boolean;
  error?: string | null;
  drinkDetail?: DrinkEntity | null;
  typeSearch?: string;
}

export interface DrinkPartialState {
  readonly [DRINK_FEATURE_KEY]: DrinkState;
}

export const drinkAdapter: EntityAdapter<DrinkEntity> = createEntityAdapter<DrinkEntity>({ selectId: (drink) => drink.idDrink });

export const initialDrinkState: DrinkState = drinkAdapter.getInitialState({
  isLoading: false,
});

const reducer = createReducer(
  initialDrinkState,
  on(DrinkActions.loadDrinks, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(DrinkActions.loadDrinksSuccess, (state, { drinks }) => drinkAdapter.setAll(drinks, { ...state, isLoading: false })),
  on(DrinkActions.loadDrinksFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  on(DrinkActions.loadDrinkDetail, (state) => ({
    ...state,
    drinkDetail: null,
    isLoading: true,
    error: null,
  })),
  on(DrinkActions.loadDrinkDetailSuccess, (state, { drinkDetail }) => ({
    ...state,
    drinkDetail,
    isLoading: false,
    error: null,
  })),
  on(DrinkActions.loadDrinkDetailFail, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  on(DrinkActions.setSearchType, (state, { typeSearch }) => ({
    ...state,
    typeSearch,
  }))
);

export function drinkReducer(state: DrinkState | undefined, action: Action) {
  return reducer(state, action);
}
