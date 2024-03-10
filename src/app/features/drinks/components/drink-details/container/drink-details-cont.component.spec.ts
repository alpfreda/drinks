import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrinkDetailsContComponent } from './drink-details-cont.component';

describe('DrinkDetailsContComponent', () => {
  let component: DrinkDetailsContComponent;
  let fixture: ComponentFixture<DrinkDetailsContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkDetailsContComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrinkDetailsContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
