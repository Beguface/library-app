import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-to-expire',
  templateUrl: './to-expire.component.html',
})
export class ToExpireComponent {

  constructor(private booksService: BooksService) { }

  get allDueToBooks() {
    return this.booksService.allDueToBooks
  }

}
