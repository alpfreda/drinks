import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrinkListContComponent } from './drink-list-cont.component';

describe('DrinkListContComponent', () => {
  let component: DrinkListContComponent;
  let fixture: ComponentFixture<DrinkListContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkListContComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrinkListContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
