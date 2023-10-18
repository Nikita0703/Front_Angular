import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Employee } from './Employee';
import { EmployeeId } from './EmployeeId';

@Injectable({
    providedIn:'root'
})
//{ headers: { 'Content-Type': 'application/json' }
export class AppService{
    private url = "http://localhost:8080/api1/employees";

    constructor(private http:HttpClient){}

    addEmployee(employee:Employee){
       return  this.http.post<Employee>(`${this.url}`,employee,{ headers: { 'Content-Type': 'application/json' }})
    }
    getEmployees():Observable<Employee[]>{
        return this.http.get<Employee[]>(`${this.url}`)  
    }
   
    getEmployeeById(id:number):Observable<Employee>{
        return this.http.get<Employee>(`${this.url}/${id}`)  
    }

    updateUser(employee?:any):Observable<any>{
        return this.http.put<any>(`${this.url}`,employee)  
    }

    deleteUser(id:number):Observable<any>{
        return this.http.delete<any>( `${this.url}/${id}`)
    }
     // Add User - Create
  
}