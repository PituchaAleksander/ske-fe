import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';
import { OrderService } from '../services/order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public data: any;

  constructor(private orderService: OrderService, public authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.getRole()==0){
      this.getDataAdmin();
    }else{
      this.getData();
    }
  }

  public getDataAdmin(){
    this.orderService.getAllOrders()
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

  public getData(){
    this.orderService.getOrders()
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

  public books(order: any){
    return order.books.map((b: any)=>b.book.title + " ")
  }

  public accept(order: any){
    console.log(order)
    this.orderService.acceptOrder(order.id)
    .pipe(
      catchError((error) => {
        return error;
      })
    )
    .subscribe({
      next: () => {
        this.getDataAdmin();
      }
    });
  }
}
