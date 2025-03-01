import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  private readonly http: HttpClient = inject(HttpClient);

  constructor() { }

  public getTodos(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
  }
}
