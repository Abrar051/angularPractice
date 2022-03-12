import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorAllComponent } from './calculator-all.component';

describe('CalculatorAllComponent', () => {
  let component: CalculatorAllComponent;
  let fixture: ComponentFixture<CalculatorAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
