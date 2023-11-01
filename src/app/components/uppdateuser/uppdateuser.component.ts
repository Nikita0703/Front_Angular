import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Employee } from 'src/app/Employee';
import { EmployeeId } from 'src/app/EmployeeId'
import { Project } from 'src/app/Project';
import { Car } from 'src/app/Car';
import { House } from 'src/app/House';
import {Pet} from 'src/app/Pet'

@Component({
  selector: 'app-updateuser',
  templateUrl: './uppdateuser.component.html',
  styleUrls: ['./uppdateuser.component.css']
})

export class UpdateuserComponent implements OnInit {

  emp: Employee;
  data: any;
  
  employeeForm: FormGroup;
  employee: Employee;
  car:Car;
  house:House;
  pets:Pet[];
  projects:Project[];
  
  
  constructor(
    private service: AppService,
     private route: ActivatedRoute, 
     private router : Router,
     private formBuilder:FormBuilder) {
      
      this.employeeForm = this.formBuilder.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        salary:['',Validators.required],
        department:['',Validators.required],
  
        car: this.formBuilder.group({
          model: ['', Validators.required],
          made: ['', Validators.required]
        }),
  
        house: this.formBuilder.group({
          adress: ['', Validators.required],
          flour: ['', Validators.required],
          flat: ['', Validators.required]
        }),
  
        pets: this.formBuilder.group({
          vid: ['', Validators.required],
          petname: ['', Validators.required]
        }),
  
        projects : this.formBuilder.group({
          title: ['', Validators.required],
          year: ['', Validators.required]
        })
  
      });  
      

      
   this.car = new Car('','',0)
    this.house = new House('','','','')
    this.projects=[]
    this.pets = []
    this.employee = new Employee(0,'',0,'','',this.car,this.house,this.pets,this.projects)
    this.emp= new Employee(0,'',0,'','',this.car,this.house,this.pets,this.projects)
      }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];
    this.service.getEmployeeById(id).subscribe(data => {
      this.emp = data
      console.log(this.emp)

      this.employeeForm.patchValue({
        id:this.emp.id,
        name: this.emp.name,
        surname: this.emp.surname,
        salary: this.emp.salary,
        department: this.emp.department,
        car: {
          model: this.emp.car.model,
          made: this.emp.car.made,
        },
        house: {
          adress: this.emp.house.adress,
        flour: this.emp.house.flour,
        flat:this.emp.house.flat
        }
      });

    
    })
    
  

  }

 onSubmitEmployee() {
    if (this.employeeForm.invalid) {
      return;
    }
  
    this.emp=this.employeeForm.value;
   

    this.employee.name=this.emp.name;
    this.employee.surname=this.emp.surname;
    this.employee.salary=this.emp.salary;
    this.employee.department=this.emp.department;
    this.employee.car=this.car;
    this.employee.house = this.house;

    this.employee.pets = this.pets;
    this.employee.projects = this.projects;

    console.log(this.employee.pets);
    console.log(this.employee.projects);
    
    console.log(this.employee)
    

    this.service.addEmployee( this.employee).subscribe(data =>{
      console.log(data)
       
     this.router.navigate(['/']);
  }
     
      )
  }


  onSubmitCar(){
    this.emp = this.employeeForm.value;
    console.log(this.emp);
    this.car = this.emp.car;
  }

  onSubmitHouse(){
    this.emp = this.employeeForm.value;
    console.log(this.emp);
    this.house = this.emp.house;
  }

  onSubmitPet(){
    this.emp = this.employeeForm.value;
    this.pets=this.pets.concat(this.emp.pets);
    console.log(this.pets)
  }

   onSubmitProject() {
    
   this.emp = this.employeeForm.value;
   
   console.log(this.emp);
    this.projects=this.projects.concat(this.emp.projects);
    console.log(this.projects)
  }
    
 

 
  

}