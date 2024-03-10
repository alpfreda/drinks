import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrinkDetailsInfoPresComponent } from './drink-details-info-pres.component';

describe('DrinkDetailsInfoPresComponent', () => {
  let component: DrinkDetailsInfoPresComponent;
  let fixture: ComponentFixture<DrinkDetailsInfoPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkDetailsInfoPresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrinkDetailsInfoPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
