import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalsService {
  setCounterValue = signal(0);
  constructor() { }
}
