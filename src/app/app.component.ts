import { Component, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SpeechToTextConversionComponent } from './speech-to-text-conversion/speech-to-text-conversion.component';
import { SignalsComponent } from './signals/signals.component';
import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SignalAmnimateComponent } from './signal-amnimate/signal-amnimate.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpeechToTextConversionComponent, SignalsComponent, CommonModule,SignalAmnimateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
 
}
