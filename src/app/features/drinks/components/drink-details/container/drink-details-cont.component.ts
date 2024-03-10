import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loadDrinkDetail } from '@features/drinks/store/drink.actions';
import { DrinkEntity, Ingredient, Instruction } from '@features/drinks/store/drink.models';
import { DrinkState } from '@features/drinks/store/drink.reducer';
import { selectDrinkDetail, selectDrinkIsLoading } from '@features/drinks/store/drink.selectors';
import { Store } from '@ngrx/store';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { Subscription } from 'rxjs';
import { Ui } from 'src/app/app-config.model';
import { AppConfigService } from 'src/app/app-config.service';
import { DrinkDetailsInfoPresComponent } from '../presenter/drink-details-info/drink-details-info-pres.component';
import { DrinkDetailsIngredientsPresComponent } from '../presenter/drink-details-ingredients/drink-details-ingredients-pres.component';
import { DrinkDetailsInstructionsPresComponent } from '../presenter/drink-details-instructions/drink-details-instructions-pres.component';

@Component({
  selector: 'dk-drink-details-cont',
  standalone: true,
  templateUrl: './drink-details-cont.component.html',
  styleUrl: './drink-details-cont.component.scss',
  imports: [CommonModule, DrinkDetailsIngredientsPresComponent, DrinkDetailsInfoPresComponent, LoadingComponent, DrinkDetailsInstructionsPresComponent],
})
export class DrinkDetailsContComponent implements OnInit, OnDestroy {
  /** Injected Store instance for interacting with the NgRx application state. */
  private readonly store: Store<DrinkState> = inject(Store<DrinkState>);
  private activatedRoute = inject(ActivatedRoute);

  /** Observable that emits the current drink detail information. */
  drinkDetail$ = this.store.select(selectDrinkDetail);

  /** Observable that emits a boolean indicating whether drink details are loading. */
  drinksIsLoading$ = this.store.select(selectDrinkIsLoading);

  /** Array to store processed ingredient data. */
  ingredients: Ingredient[] = [];

  /** Array to store processed instruction data in multiple languages. */
  instructions: Instruction[] = [];

  /** Subscription for managing data streams. */
  subscription: Subscription = new Subscription();

  /** Configuration data for the UI elements */
  uiConfig!: Ui;

  constructor(appConfig: AppConfigService) {
    this.uiConfig = appConfig.data.ui;
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.store.dispatch(loadDrinkDetail({ id }));

    this.prepareData();
  }

  /**
   * Subscribes to the drink detail observable and calls preparation methods when data is available.
   */
  prepareData(): void {
    this.subscription = this.drinkDetail$.subscribe((drinkDetail) => {
      if (drinkDetail) {
        this.prepareIngredients(drinkDetail);
        this.prepareLanguages(drinkDetail);
      }
    });
  }

  /**
   * Processes ingredients from drink detail data and creates a structured array of ingredient objects.
   * @param drinkDetail The drink detail data received from the store.
   */
  prepareIngredients(drinkDetail: DrinkEntity): void {
    for (let ingredientIndex = 1; ingredientIndex <= 15; ingredientIndex++) {
      const ingredient = drinkDetail[`strIngredient${ingredientIndex}` as keyof DrinkEntity];
      if (ingredient) {
        const measure = drinkDetail[`strMeasure${ingredientIndex}` as keyof DrinkEntity];
        this.ingredients.push({
          name: ingredient,
          url: `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`,
          measure: measure,
        });
      }
    }
  }

  /**
   * Processes instructions in multiple languages from drink detail data and creates an array of instruction objects.
   * @param drinkDetail The drink detail data received from the store.
   */
  prepareLanguages(drinkDetail: DrinkEntity): void {
    const languages = ['ES', 'DE', 'FR', 'IT', 'ZH-HANS', 'H-HANT'];
    this.instructions.push({
      name: 'EN',
      value: drinkDetail.strInstructions,
    }); // default language

    for (const language of languages) {
      const instruction = drinkDetail[`strInstructions${language}` as keyof DrinkEntity];
      if (instruction) {
        this.instructions.push({
          name: language,
          value: instruction,
        });
      }
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
