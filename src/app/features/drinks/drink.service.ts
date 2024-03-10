import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Api } from 'src/app/app-config.model';
import { AppConfigService } from 'src/app/app-config.service';
import { DrinkEntity } from './store/drink.models';

@Injectable()
export class DrinkService {
  /** Configuration object for the drink API endpoints. */
  private apiConfig: Api;

  constructor(private http: HttpClient, private appConfig: AppConfigService) {
    /**
     * Initialize the API configuration from the app config service.
     */
    this.apiConfig = appConfig.data.api;
  }

  /**
   * Fetches a list of drinks based on the provided search type.
   *
   * @param typeSearch The search parameter to filter the drink list.
   * @returns An observable that emits an array of DrinkEntity objects representing the drink list.
   */
  fetchDrinksList(typeSearch: string): Observable<DrinkEntity[]> {
    return this.http.get<{ drinks: DrinkEntity[] }>(this.apiConfig.baseUrl + this.apiConfig.endpoints.list + typeSearch).pipe(map(({ drinks }) => drinks));
  }

  /**
   * Fetches details for a specific drink based on its ID.
   *
   * @param id The ID of the drink to fetch details for.
   * @returns An observable that emits a single DrinkEntity object representing the drink details.
   */
  fetchDrinkDetail(id: string): Observable<DrinkEntity> {
    return this.http.get<{ drinks: DrinkEntity[] }>(this.apiConfig.baseUrl + this.apiConfig.endpoints.details + id).pipe(map(({ drinks }) => drinks[0]));
  }
}
