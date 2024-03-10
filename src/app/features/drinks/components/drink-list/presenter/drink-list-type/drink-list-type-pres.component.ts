import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Type } from 'src/app/app-config.model';

@Component({
  selector: 'dk-drink-list-type-pres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drink-list-type-pres.component.html',
  styleUrl: './drink-list-type-pres.component.scss',
})
export class DrinkListTypePresComponent {
  @Input() types!: Type[];
  @Input() type!: string;
  @Output() changeType: EventEmitter<string> = new EventEmitter<string>();

  onChangeType(newType: string): void {
    this.changeType.emit(newType);
  }
}
