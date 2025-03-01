import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbservableAmnimateComponent } from './abservable-amnimate.component';

describe('AbservableAmnimateComponent', () => {
  let component: AbservableAmnimateComponent;
  let fixture: ComponentFixture<AbservableAmnimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbservableAmnimateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbservableAmnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
