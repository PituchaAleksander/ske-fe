import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';
import { BookService } from '../services/book/book.service';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.scss']
})
export class AddEditBookComponent implements OnInit {

  public bookId: string = this.route.snapshot.params.id;
  public data = {
    author: undefined,
    price: undefined,
    title: undefined
  };

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    if(this.bookId){
      this.bookService.getBook(this.bookId)
      .pipe(
        catchError((error) => {
          return error;
        })
      )
      .subscribe({
        next: (response) => {
          this.data = {
            author: response.author,
            price: response.price,
            title: response.title
          };
        }
      });
    }
  }

  public apply(){
    if(this.bookId){
      this.bookService.updateBook(this.bookId, this.data)
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
    }else{
      this.bookService.addBook(this.data)
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
  }
}
