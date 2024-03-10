import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoPresComponent } from './logo-pres.component';

describe('LogoPresComponent', () => {
  let component: LogoPresComponent;
  let fixture: ComponentFixture<LogoPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoPresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
