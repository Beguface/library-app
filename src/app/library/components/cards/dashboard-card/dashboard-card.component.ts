import { Component, Input } from '@angular/core';
import { DashboardItem } from 'src/app/library/interfaces/dashboard-item';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
})
export class DashboardCardComponent {


  @Input() data!: DashboardItem;

  constructor() { }



}
