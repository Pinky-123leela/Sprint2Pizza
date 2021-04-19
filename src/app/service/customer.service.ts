import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../customer/Customer";

@Injectable({
    providedIn:'root',
})

export class CustomerService{

    backendUrl:string='http://localhost:9595/onlinepizza/'
    constructor(private http:HttpClient){}

    getCustomer():Observable<Customer[]>
    {
        const headers = new HttpHeaders({ Authorization: 'Bearer ' + sessionStorage.getItem('token') });
        console.log("test call");
        return this.http.get<Customer[]>(this.backendUrl+'customers');
    }

    register(customer:Customer)
    {
        return this.http.post(this.backendUrl+'register',customer);
    }
}