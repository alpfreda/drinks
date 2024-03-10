import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationContComponent } from './navigation-cont.component';

describe('NavigationContComponent', () => {
  let component: NavigationContComponent;
  let fixture: ComponentFixture<NavigationContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationContComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
