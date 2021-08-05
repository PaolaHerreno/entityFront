import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntityparserService {

  constructor(private http: HttpClient) { }

    getEntity(text: string): Observable<any>{
      return this.http.post<any>('http://localhost:5000', text)
    }
}
