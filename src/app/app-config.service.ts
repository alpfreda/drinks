import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from './app-config.model';

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  data: any;

  constructor(private http: HttpClient) {}

  load(defaults?: AppConfig): Promise<AppConfig> {
    return new Promise<AppConfig>((resolve) => {
      this.http.get('assets/app.config.json').subscribe(
        (response) => {
          this.data = Object.assign({}, defaults || {}, response || {});
          resolve(this.data);
        },
        () => {
          this.data = Object.assign({}, defaults || {});
          resolve(this.data);
        }
      );
    });
  }
}
