import { Component } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent{

  titles: string[] = ["Nuevos", "Recomendados"]

  constructor(private booksService: BooksService) { }

  get allBooks() {
    return this.booksService.allBooks
  }

}
