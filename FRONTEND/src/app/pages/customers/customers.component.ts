import { CustomersService } from './../../services/customers.service';
import { User } from './../../interfaces/User';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = ['name','email', 'phone', "actions"];
  dataSource: User[] =[];
  constructor(public service: CustomersService, public dialog: MatDialog) { }

  ngOnInit(): void {
     this.service.getCustomers().subscribe(data => this.dataSource = data)
  }

  edit() {
    const dialogRef = this.dialog.open(FormComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  add() {
    const dialogRef = this.dialog.open(FormComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
