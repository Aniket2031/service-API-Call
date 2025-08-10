import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private http:HttpClient) { }

  getData(): Observable<any>{
   
    return this.http.get('https://dummyjson.com/todos/1');
     
  }

}
