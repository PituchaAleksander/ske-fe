import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class BookService extends BaseService{

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  public getBooks(): Observable<any> {
    return this.get("/book");
  }

  public getBook(id: string): Observable<any> {
    return this.get("/book/"+id);
  }

  public updateBook(id: string, request: any): Observable<any> {
    return this.put("/book/"+id, request);
  }

  public addBook(request: any): Observable<any> {
    return this.post("/book", request);
  }

  public deleteBook(id: string): Observable<any> {
    return this.delete("/book/"+id);
  }
}
