import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'dk-about',
  standalone: true,
  imports: [CommonModule],
  template: '<div class="container" style="padding: 5rem;text-align:center"> Here is about us</div>',
})
export class AboutComponent {}
