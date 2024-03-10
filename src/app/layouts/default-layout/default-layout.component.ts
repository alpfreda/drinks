import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationContComponent } from '@features/navigation/components/container/navigation-cont.component';

@Component({
  selector: 'dk-default-layout',
  standalone: true,
  imports: [RouterOutlet, NavigationContComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss',
})
export class DefaultLayoutComponent {}
