import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/library/services/books.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {

  constructor(private booksService: BooksService) { }

  toggleMenu() {
    return this.booksService.toggleMenu()

  }

}
