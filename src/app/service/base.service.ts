import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  
  private api = "http://localhost:8080/api"
  public header = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(protected httpClient: HttpClient) { }

  protected get(url: string): Observable<any> {
    return this.httpClient.get(this.api + url, this.header);
  }

  protected post(url: string, request?: any): Observable<any> {
    return this.httpClient.post(this.api + url, JSON.stringify(request), this.header);
  }

  protected put(url: string, request?: any): Observable<any> {
    return this.httpClient.put(this.api + url, JSON.stringify(request), this.header);
  }

  protected delete(url: string): Observable<any> {
    return this.httpClient.delete(this.api + url);
  }
}
