import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
constructor(private http: HttpClient) { }
getCustomers(): Observable<any>{ return this.http.get('http://localhost/YleUploader/BACKEND/API/User.php');}
getCustomer(id: number): Observable<any>{return this.http.get('http://localhost/YleUploader/BACKEND/API/User.php?id='+id)}
}
