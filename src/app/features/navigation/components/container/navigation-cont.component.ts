import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Ui } from 'src/app/app-config.model';
import { AppConfigService } from 'src/app/app-config.service';
import { LogoPresComponent } from '../presenter/logo/logo-pres.component';
import { NavbarPresComponent } from '../presenter/navbar/navbar-pres.component';

@Component({
  selector: 'dk-navigation-cont',
  standalone: true,
  templateUrl: './navigation-cont.component.html',
  styleUrl: './navigation-cont.component.scss',
  imports: [CommonModule, LogoPresComponent, NavbarPresComponent],
})
export class NavigationContComponent {
  /** Flag to indicate whether the navigation bar should be sticky. */
  isSticky = false;

  /** Configuration data for the UI elements, likely containing properties related to the navigation bar. */
  uiConfig: Ui;

  constructor(appConfig: AppConfigService) {
    /**
     * Injects the AppConfigService to access the UI configuration from the application configuration data.
     */
    this.uiConfig = appConfig.data.ui;
  }

  /**
   * Listens for the 'window:scroll' event and updates the 'isSticky' property based on scroll position.
   */
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isSticky = window.scrollY >= 100;
  }
}
