import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService{

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  public getAllOrders(): Observable<any> {
    return this.get("/order/all");
  }

  public getOrders(): Observable<any> {
    return this.get("/order");
  }

  public order(): Observable<any> {
    return this.post("/order");
  }

  public acceptOrder(id: string): Observable<any> {
    return this.put("/order/accept/"+id);
  }
}