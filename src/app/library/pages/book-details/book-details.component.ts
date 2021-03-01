import { Location } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../interfaces/book.interface';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: [
  ]
})
export class BookDetailsComponent implements OnInit {

  book!: Book;
  id!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private booksService: BooksService,
    private _location: Location) { }


  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id }) => {

      this.book = this.booksService.getDetailsBook( id )

    })

  }


  rentBook(id: number) {

    this.id = id;
    this.book = this.booksService.rentBook(this.id);
  }

  backClicked() {
    this._location.back();
  }


}
