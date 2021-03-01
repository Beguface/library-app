import { Component, Input} from '@angular/core';
import { Book } from 'src/app/library/interfaces/book.interface';


@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',

})
export class CardsContainerComponent {

  @Input() books : Book[] = [];
  @Input() title! : string;

  constructor() { }


}
