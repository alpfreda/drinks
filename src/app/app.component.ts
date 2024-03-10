import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '@layouts/default-layout/default-layout.component';

@Component({
  standalone: true,
  imports: [DefaultLayoutComponent, RouterModule],
  selector: 'dk-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'drink';
}
