import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';
import { BookService } from '../services/book/book.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  public data: any;

  constructor(private router: Router, private bookService: BookService, private cartService: CartService, public authService: AuthService) { }

  ngOnInit(): void {
    this.getData();
  }

  public getData(){
    this.bookService.getBooks()
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

  public edit(book: any){
    this.router.navigate([`/layout/book/${book.id}`]);
  }

  public deleteBook(book: any){
    this.bookService.deleteBook(book.id).pipe(
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

  public add(book: any){
    this.cartService.addToCart(book.id)
    .pipe(
      catchError((error) => {
        return error;
      })
    )
    .subscribe({
      next: (response) => {
        console.log("succes")
      }
    });
  }
}
