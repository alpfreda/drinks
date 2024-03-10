import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DRINK_FEATURE_KEY, DrinkState, drinkAdapter } from './drink.reducer';

export const selectDrinkState =
  createFeatureSelector<DrinkState>(DRINK_FEATURE_KEY);

const { selectAll, selectEntities } = drinkAdapter.getSelectors();

export const selectDrinkIsLoading = createSelector(
  selectDrinkState,
  (state: DrinkState) => state.isLoading
);

export const selectDrinkDetail = createSelector(
  selectDrinkState,
  (state: DrinkState) => state.drinkDetail
);

export const selectTypeSearch = createSelector(
  selectDrinkState,
  (state: DrinkState) => state.typeSearch
);

export const selectDrinkError = createSelector(
  selectDrinkState,
  (state: DrinkState) => state.error
);

export const selectAllDrink = createSelector(
  selectDrinkState,
  (state: DrinkState) => selectAll(state)
);

export const selectDrinkEntities = createSelector(
  selectDrinkState,
  (state: DrinkState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectDrinkState,
  (state: DrinkState) => state.selectedId
);

export const selectEntity = createSelector(
  selectDrinkEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
