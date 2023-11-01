import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Employee';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewusersComponent implements OnInit {

users: Employee[] | undefined

url: string = "http://localhost:8080/api1/employee";

  constructor(private service: AppService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getEmployees().subscribe(data => {
      this.users = data;
    })
  }

  deleteUser(id: number){
    this.service.deleteUser(id).subscribe(data => {
      this.users = this.users?.filter(user => user.id !== id);
    })
    
  
  }

  updateUser(id: number){
    this.router.navigate(['update', id]);
  }

}