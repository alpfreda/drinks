import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { loadDrinks, setSearchType } from '@features/drinks/store/drink.actions';
import { DrinkState } from '@features/drinks/store/drink.reducer';
import { Store } from '@ngrx/store';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { Subscription, take } from 'rxjs';
import { Ui } from 'src/app/app-config.model';
import { AppConfigService } from 'src/app/app-config.service';
import { DrinkListIntroPresComponent } from '../presenter/drink-list-intro/drink-list-intro-pres.component';
import { DrinkListPresComponent } from '../presenter/drink-list-item/drink-list-item-pres.component';
import { DrinkListTypePresComponent } from '../presenter/drink-list-type/drink-list-type-pres.component';
import { selectAllDrink, selectDrinkIsLoading, selectTypeSearch } from './../../../store/drink.selectors';

@Component({
  selector: 'dk-drink-list-cont',
  standalone: true,
  templateUrl: './drink-list-cont.component.html',
  styleUrl: './drink-list-cont.component.scss',
  imports: [CommonModule, DrinkListPresComponent, DrinkListIntroPresComponent, LoadingComponent, DrinkListTypePresComponent],
})
export class DrinkListContComponent implements OnInit, OnDestroy {
  /** Injected Store instance for interacting with the NgRx application state. */
  private readonly store: Store<DrinkState> = inject(Store<DrinkState>);

  /** Observable that emits the current list of drinks. */
  drinks$ = this.store.select(selectAllDrink);

  /** Observable that emits a boolean indicating whether drinks are loading. */
  drinksIsLoading$ = this.store.select(selectDrinkIsLoading);

  /** Observable that emits the current search type for drinks. */
  typeSearch$ = this.store.select(selectTypeSearch);

  /** Configuration data for the UI elements. */
  uiConfig!: Ui;

  /** Subscription for managing data streams. */
  subscription: Subscription = new Subscription();

  constructor(appConfig: AppConfigService) {
    /**
     * Initialize UI configuration from the app config service.
     */
    this.uiConfig = appConfig.data.ui;
  }

  ngOnInit() {
    /**
     * Subscribe to the typeSearch observable and dispatch actions to update search type and load drinks
     * based on the first emitted value (take(1)).
     */
    this.subscription = this.typeSearch$.pipe(take(1)).subscribe((data) => {
      this.changeType(data || this.uiConfig.defaultType);
    });
  }

  /**
   * Dispatches actions to update the search type and load drinks based on the provided type.
   * @param type The search type to use for filtering drinks.
   */
  changeType(type: string): void {
    this.store.dispatch(setSearchType({ typeSearch: type }));
    this.store.dispatch(loadDrinks({ typeSearch: type }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
