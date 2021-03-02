import { Component } from '@angular/core';
import { BooksService } from 'src/app/library/services/books.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.scss'
  ]
})
export class SidebarComponent {

  constructor(private booksService: BooksService) { }

  get isOpen() {

    return this.booksService.isOpen;

  }




}
