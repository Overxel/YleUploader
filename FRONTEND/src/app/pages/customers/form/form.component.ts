import { CustomersService } from './../../../services/customers.service';
import { Component, Input, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() id: any = undefined;

  name = new FormControl('', [Validators.required]);
  surname = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('',
   [Validators.required,
    Validators.pattern("^[0-9]*$"),
    Validators.minLength(9),
    Validators.maxLength(9),
  ]);


  constructor(public service: CustomersService) { }

  ngOnInit() {
    if(this.id){
      this.service.getCustomer(this.id).subscribe(customer => {
        this.name.setValue(customer.name);
        this.surname.setValue(customer.surname);
        this.email.setValue(customer.email);
        this.phone.setValue(customer.phone);
      });
    }
  }

  getMailError() {
    if (this.email.hasError('required')) {
      return 'Campo obligatorio';
    }

    return this.email.hasError('email') ? 'No es un email válido' : '';
  }

  getPhoneError(){
    if (this.phone.hasError('required')) {
      return 'Campo obligatorio';
    }
    if(this.phone.hasError('pattern')){
      return 'No es un teléfono válido';
    }

    if(this.phone.hasError('minlenght') || this.phone.hasError('maxlenght')){
      return 'La longitud del teléfono introducida no es correcta';
    }
    return '';
  }

  getNameError(){
    if (this.name.hasError('required')) {
      return 'Campo obligatorio';
    }
    return '';
  }

  getSurNameError(){
    if (this.name.hasError('required')) {
      return 'Campo obligatorio';
    }
    return '';
  }
}
