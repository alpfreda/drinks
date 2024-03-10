import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { DrinkService } from '../drink.service';
import * as DrinkActions from './drink.actions';

@Injectable()
export class DrinkEffects {
  private actions$ = inject(Actions);
  private drinkService = inject(DrinkService);

  loadDrinks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DrinkActions.loadDrinks),
      switchMap((action) =>
        this.drinkService.fetchDrinksList(action.typeSearch).pipe(
          map((drinks) => DrinkActions.loadDrinksSuccess({ drinks })),
          catchError((err: HttpErrorResponse) => of(DrinkActions.loadDrinksFailure({ error: err.error })))
        )
      )
    )
  );

  loadDrinkDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DrinkActions.loadDrinkDetail),
      mergeMap((action) =>
        this.drinkService.fetchDrinkDetail(action.id).pipe(
          map((drinkDetail) => DrinkActions.loadDrinkDetailSuccess({ drinkDetail })),
          catchError((err) => of(DrinkActions.loadDrinkDetailFail({ error: err.error })))
        )
      )
    )
  );
}
