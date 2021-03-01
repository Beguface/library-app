import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html'
})
export class BookCardComponent {
  @Input() id: number = 0;
  @Input() title: string = "";
  @Input() author: string = "";
  @Input() image: string = "";

  constructor() { }


}
