import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrinkListIntroPresComponent } from './drink-list-intro-pres.component';

describe('DrinkListIntroPresComponent', () => {
  let component: DrinkListIntroPresComponent;
  let fixture: ComponentFixture<DrinkListIntroPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkListIntroPresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrinkListIntroPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
