import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarPresComponent } from './navbar-pres.component';

describe('NavbarPresComponent', () => {
  let component: NavbarPresComponent;
  let fixture: ComponentFixture<NavbarPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarPresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
