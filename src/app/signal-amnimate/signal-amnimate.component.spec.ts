import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalAmnimateComponent } from './signal-amnimate.component';

describe('SignalAmnimateComponent', () => {
  let component: SignalAmnimateComponent;
  let fixture: ComponentFixture<SignalAmnimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalAmnimateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalAmnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
