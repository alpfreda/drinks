import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppConfigService } from './app/app-config.service';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';

export const setupAppConfigServiceFactory = (service: AppConfigService) => () =>
  service.load();

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(appRoutes),
    provideStore(),
    provideRouterStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    {
      provide: APP_INITIALIZER,
      useFactory: setupAppConfigServiceFactory,
      deps: [AppConfigService],
      multi: true,
    },
  ],
}).catch((err) => console.error(err));
