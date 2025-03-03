import { Component, computed, effect, inject, signal, untracked } from '@angular/core';
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
  content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
  count = signal(0);
  setCounterValue: any;
  private readonly todosService: ApiServicesService = inject(ApiServicesService);
  doubleCount = computed(() => this.count() * 2);
  public todos = toSignal(this.todosService.getTodos(), { initialValue: [{title: this.content}] });
  public todos$: Observable<any> = this.todosService.getTodos();



  observableString = "public todos$: Observable<any> = this.todosService.getTodos()"
  signaleString = "public todos = toSignal(this.todosService.getTodos(), { initialValue: [title: content] })"

  constructor(private signalsService:SignalsService){
    effect(res=> {
      console.log(this.count(),"ValueCh+anged");
      this.setCounterValue = this.signalsService.setCounterValue();
    })
  }

  setSameValue(){
    let val = prompt('set same value');
    if (val) {
      this.count.set(Number(val));
    }
    
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
