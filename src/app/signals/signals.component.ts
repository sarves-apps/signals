import { Component, computed, effect, inject, signal } from '@angular/core';
import { SignalsService } from '../signals.service';
import { ApiServicesService } from '../api-services.service';
import { Observable } from 'rxjs';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  providers: [SignalsService, ApiServicesService],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  count = signal(1);
  setCounterValue: any;
  private readonly todosService: ApiServicesService = inject(ApiServicesService);
  doubleCount = computed(() => this.count() * 2);
  public todos$: Observable<any> = this.todosService.getTodos();
  public todos = toSignal(this.todosService.getTodos(), { initialValue: [] });


  observableString = "public todos$: Observable<any> = this.todosService.getTodos()"
  signaleString = "public todos = toSignal(this.todosService.getTodos(), { initialValue: [] })"

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

  decressCounter(){
    this.count.update(res => this.count() - 1);
    this.signalsService.setCounterValue.set(this.count());
  }

  reset(){
    this.count.set(0)
    this.signalsService.setCounterValue.set(0);
  }
}
