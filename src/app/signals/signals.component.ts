import { Component, computed, effect, signal } from '@angular/core';
import { SignalsService } from '../signals.service';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  providers: [SignalsService],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  count = signal(0);
  setCounterValue: any;
;

  // Computed signals derive their values from other signals and automatically update when those signals change. 
  // They are read-only which means you cannot directly assign values to a computed signal.
  doubleCount = computed(() => this.count() * 2);

  constructor(private signalsService:SignalsService){
    effect(res=> {
      console.log(this.count(),"RES");
      this.setCounterValue = this.signalsService.setCounterValue();
    })
  }
  

  incressCounter(){
    this.count.update(res => this.count() + 1);
    this.signalsService.setCounterValue.set(this.count());
  }
}
