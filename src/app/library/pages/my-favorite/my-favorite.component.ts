import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-my-favorite',
  templateUrl: './my-favorite.component.html'
})
export class MyFavoriteComponent {

  constructor(private booksService: BooksService) { }

  get allFavoriteBooks() {
    return this.booksService.allFavoriteBooks
  }


}
