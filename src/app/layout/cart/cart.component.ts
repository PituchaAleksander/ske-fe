import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { CartService } from '../services/cart/cart.service';
import { OrderService } from '../services/order/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public data: any;

  constructor(private cartService: CartService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.getData();
  }

  public getData(){
    this.cartService.getCart()
    .pipe(
      catchError((error) => {
        return error;
      })
    )
    .subscribe({
      next: (response) => {
        this.data = response;
      }
    });
  }
  public deleteBook(book: any){
    this.cartService.deleteBook(book.id).pipe(
      catchError((error) => {
        return error;
      })
    )
    .subscribe({
      next: () => {
        this.getData();
      }
    });
  }

  public addBook(book: any){
    this.cartService.addToCart(book.id)
    .pipe(
      catchError((error) => {
        return error;
      })
    )
    .subscribe({
      next: (response) => {
        this.getData();
      }
    });
  }

  public buy(){
    this.orderService.order()
    .pipe(
      catchError((error) => {
        return error;
      })
    )
    .subscribe({
      next: (response) => {
        window.open(response.url, "_blank");
        this.getData();
      }
    });
  }

  public clear(){
    this.cartService.deleteCart()
    .pipe(
      catchError((error) => {
        return error;
      })
    )
    .subscribe({
      next: (response) => {
        this.getData();
      }
    });
  }
}