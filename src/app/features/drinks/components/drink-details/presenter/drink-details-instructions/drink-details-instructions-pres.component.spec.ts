import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrinkDetailsInstructionsPresComponent } from './drink-details-instructions-pres.component';

describe('DrinkDetailsInstructionsPresComponent', () => {
  let component: DrinkDetailsInstructionsPresComponent;
  let fixture: ComponentFixture<DrinkDetailsInstructionsPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkDetailsInstructionsPresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrinkDetailsInstructionsPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
