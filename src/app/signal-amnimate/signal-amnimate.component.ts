import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-signal-amnimate',
  standalone: true,
  imports: [],
  templateUrl: './signal-amnimate.component.html',
  styleUrl: './signal-amnimate.component.css',
  animations: [
    trigger('myAnimation', [
      state('start', style({ opacity: 0 })),
      state('end', style({ opacity: 1 })),
      transition('start => end', [
        animate('1s')
      ])
    ])
  ]
})
export class SignalAmnimateComponent {
  public mySignal = toSignal(of('end'), { initialValue: 'start' });
}
