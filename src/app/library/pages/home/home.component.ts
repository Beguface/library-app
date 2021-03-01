import { Component } from '@angular/core';
import { DashboardItem } from '../../interfaces/dashboard-item';
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

  get allNewBooks() {
    return this.booksService.allNewBooks
  }

  get allRentedBooks() {
    return this.booksService.allRentedBooks
  }


  get allDueToBooks() {
    return this.booksService.allDueToBooks
  }

  dashboardItems: DashboardItem[] = [

    {title: "Alquilados",
      icon: "assets/images/book-open.svg",
      count: this.allRentedBooks.length
    },
    { title: "Por Caducuar",
      icon: "assets/images/expire.svg",
      count: this.allDueToBooks.length
    }
  ]

}
