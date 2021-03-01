import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BookDetailsComponent } from './library/pages/book-details/book-details.component'

import { HomeComponent } from './library/pages/home/home.component'
import { MyBooksComponent } from './library/pages/my-books/my-books.component'
import { MyFavoriteComponent } from './library/pages/my-favorite/my-favorite.component'
import { ToExpireComponent } from './library/pages/to-expire/to-expire.component'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'mybooks',
    component: MyBooksComponent,
  },
  {
    path: 'favorite',
    component: MyFavoriteComponent,
  },
  {
    path: 'toexpire',
    component: ToExpireComponent,
  },
  {
    path: 'books/:id',
    component: BookDetailsComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
]


@NgModule({
  imports: [ RouterModule.forRoot( routes )],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
