import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('On Init - CustomerListComponent')
  }

  ngOnDestroy(): void {
    console.log('On Destroy - CustomerListComponent')
  }

}
