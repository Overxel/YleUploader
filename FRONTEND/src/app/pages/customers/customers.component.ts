import { User } from './../../interfaces/User';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = ['name','email', 'phone'];
  dataSource: User[] =[];
  constructor() { }

  ngOnInit(): void {
  }

}
