import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'dk-contact',
  standalone: true,
  imports: [CommonModule],
  template: '<div class="container" style="padding: 5rem;text-align:center"> Here is contact us</div>',
})
export class ContactComponent {}
