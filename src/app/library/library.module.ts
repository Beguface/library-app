import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MyBooksComponent } from './pages/my-books/my-books.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';



@NgModule({
  declarations: [HomeComponent, MyBooksComponent, BookDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent, MyBooksComponent, BookDetailsComponent]
})
export class LibraryModule { }
