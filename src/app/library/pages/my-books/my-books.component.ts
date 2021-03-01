import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styles: [
  ]
})
export class MyBooksComponent {

  constructor(private booksService: BooksService) { }

  get allRentedBooks() {
    return this.booksService.allRentedBooks
  }

}
