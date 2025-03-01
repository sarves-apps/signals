import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-abservable-amnimate',
  standalone: true,
  imports: [],
  templateUrl: './abservable-amnimate.component.html',
  styleUrl: './abservable-amnimate.component.css',
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
export class AbservableAmnimateComponent {
  public myObservable$: Observable<string> = of('end');
}
