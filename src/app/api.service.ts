import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBaseUrl = 'http://localhost:3003/api/search';

  constructor(private http: HttpClient) { }

  search(searchCriteria): Observable<any>  {
    let fetchUrl = this.apiBaseUrl+'/'+searchCriteria.price+'/'+searchCriteria.city+' '+searchCriteria.state;
    console.log(fetchUrl);
    return this.http.get<any>(fetchUrl, httpOptions);
  }
}