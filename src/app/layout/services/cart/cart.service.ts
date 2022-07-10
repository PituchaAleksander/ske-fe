import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class CartService extends BaseService{

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  public getCart(): Observable<any> {
    return this.get("/cart");
  }

  public deleteCart(): Observable<any> {
    return this.delete("/cart");
  }

  public addToCart(id: string): Observable<any> {
    return this.post("/cart/"+id);
  }

  public deleteBook(id: string): Observable<any> {
    return this.delete("/cart/"+id);
  }
}