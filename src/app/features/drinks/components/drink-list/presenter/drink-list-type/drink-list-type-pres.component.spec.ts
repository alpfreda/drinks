import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrinkListTypePresComponent } from './drink-list-type-pres.component';

describe('DrinkListTypePresComponent', () => {
  let component: DrinkListTypePresComponent;
  let fixture: ComponentFixture<DrinkListTypePresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkListTypePresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrinkListTypePresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
