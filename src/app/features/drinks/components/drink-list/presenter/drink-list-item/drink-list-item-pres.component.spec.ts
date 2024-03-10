import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrinkListPresComponent } from './drink-list-item-pres.component';

describe('DrinkListPresComponent', () => {
  let component: DrinkListPresComponent;
  let fixture: ComponentFixture<DrinkListPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkListPresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrinkListPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
