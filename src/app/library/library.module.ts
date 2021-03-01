import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MyBooksComponent } from './pages/my-books/my-books.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { BookCardComponent } from './components/cards/book-card/book-card.component';
import { CardsContainerComponent } from './components/cards/cards-container/cards-container.component';
import { DashboardCardComponent } from './components/cards/dashboard-card/dashboard-card.component';
import { MyFavoriteComponent } from './pages/my-favorite/my-favorite.component';
import { ToExpireComponent } from './pages/to-expire/to-expire.component';



@NgModule({
  declarations: [HomeComponent, MyBooksComponent, BookDetailsComponent, BookCardComponent, CardsContainerComponent, DashboardCardComponent, MyFavoriteComponent, ToExpireComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HomeComponent, MyBooksComponent, BookDetailsComponent]
})
export class LibraryModule { }
