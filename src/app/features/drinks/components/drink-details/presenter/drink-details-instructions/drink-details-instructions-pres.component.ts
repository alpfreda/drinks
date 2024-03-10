import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Instruction } from '@features/drinks/store/drink.models';

@Component({
  selector: 'dk-drink-details-instructions-pres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drink-details-instructions-pres.component.html',
  styleUrl: './drink-details-instructions-pres.component.scss',
})
export class DrinkDetailsInstructionsPresComponent implements OnInit {
  @Input() instructions!: Instruction[];
  currentInstruction: Instruction | null = null;

  ngOnInit(): void {
    this.currentInstruction = this.instructions[0];
  }

  changeInstruction(instruction: Instruction): void {
    this.currentInstruction = instruction;
  }
}
