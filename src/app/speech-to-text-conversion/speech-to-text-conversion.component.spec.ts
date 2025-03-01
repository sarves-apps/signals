import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechToTextConversionComponent } from './speech-to-text-conversion.component';

describe('SpeechToTextConversionComponent', () => {
  let component: SpeechToTextConversionComponent;
  let fixture: ComponentFixture<SpeechToTextConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeechToTextConversionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeechToTextConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
