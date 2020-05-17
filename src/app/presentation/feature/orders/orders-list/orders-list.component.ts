import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('On Init - OrdersListComponent')
  }

  ngOnDestroy(): void {
    console.log('On Destroy - OrdersListComponent')
  }

}
