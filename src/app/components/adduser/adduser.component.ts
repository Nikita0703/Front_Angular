import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeId } from 'src/app/EmployeeId';
import { AppService } from 'src/app/app.service';
import { Project } from 'src/app/Project';
import { Employee } from 'src/app/Employee';
import { Car } from 'src/app/Car';
import { House } from 'src/app/House';
import {Pet} from 'src/app/Pet'

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
 
  employeeForm: FormGroup;
  //projectForm: FormGroup;
  //carForm:FormGroup;
  //houseForm:FormGroup;
  //petForm:FormGroup;

  emp:Employee;
  employee: Employee;
  car:Car;
  house:House;
  pets:Pet[];
  pet:Pet;
  projects:Project[];
  data:any

  constructor(private service: AppService, private router: Router,private formBuilder: FormBuilder) { 
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

    
   // this.carForm = this.formBuilder.group({
     // model: ['', Validators.required],
     // made: ['', Validators.required]
   // });

   // this.houseForm = this.formBuilder.group({
     // adress: ['', Validators.required],
      //flour: ['', Validators.required],
     // flat: ['', Validators.required],
  //  });

   // this.petForm = this.formBuilder.group({
    //  vid: ['', Validators.required],
     // petname: ['', Validators.required]
  //  });

   //// this.projectForm = this.formBuilder.group({
     /// title: ['', Validators.required],
      //year: ['', Validators.required]
  //  });

    //this.employee = new Employee(0,'',0, '','', []);
    this.car = new Car('','',0)
    this.house = new House('','','','')
    this.projects=[]
    this.pets = []
    this.employee = new Employee(0,'',0,'','',this.car,this.house,this.pets,this.projects)
    this.emp = new Employee(0,'',0,'','',this.car,this.house,this.pets,this.projects)
    this.pet = new Pet(0,'','')
  }

  ngOnInit() {
   
  }

 async  onSubmitEmployee() {
    if (this.employeeForm.invalid) {
      return;
    }
   // this.data=this.employeeForm.value;
    this.emp=this.employeeForm.value;
   // console.log(this.emp);

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
    //this.employee = {...this.data,pets:this.pets.concat(), projects:this.projects.concat()}
   
    //console.log(this.projects)
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
   // const pet = this.emp.pets;
   //console.log(this.emp)
   //console.log("first")
   //console.log(this.emp.pets);
    this.pets=this.pets.concat(this.emp.pets);
   // console.log("second")
    console.log(this.pets)
  }

   onSubmitProject() {
    //if (this.projectForm.invalid) {
    //  return;
    //}

    //const title =  await this.projectForm.get("title");
   // const year =  await this.projectForm.get("year");
   this.emp = this.employeeForm.value;
   // const project = this.emp.projects;
   console.log(this.emp);
    this.projects=this.projects.concat(this.emp.projects);
    console.log(this.projects)

   // this.projectForm.reset();
  }
    
 
 
 
  // const formData = Object.assign({}, this.employeeForm.value);
//delete formData.parentFormGroup;
    //console.log(FormData)
    //const name =  await (FormData.name);
    //const surname =  await (FormData.surname);
    //const salary =  await(FormData.salary);
    //const department =  await(this.employeeForm.get('department'));

    //this.employee.name = JSON.stringify(name);
   // this.employee.surname = JSON.stringify(surname);
    //let number:number = Number(salary)
   // this.employee.salary = number;
    //this.employee.department = JSON.stringify(department);

    //const empl = new EmployeeId(name,surname,salary, department,this.employee.projects);
    // Отправить данные на сервер для добавления
    //console.log(empl);
  
  //employee: Employee= {
       // name: '',
       // surname: '',
       // salary: 0,
       // department:'',
       // projects:[]
     // }
        
    
      

 
  //project:any
 
  //constructor(private service: AppService, private router: Router) { }
    
    
 //form = new FormGroup({
   // name: new FormControl('', [Validators.required]),
   // surname: new FormControl('', [Validators.required]),
    //salary: new FormControl('', [Validators.required]),
    //department: new FormControl('', [Validators.required])
 // })

 // formpr = new FormGroup({
    //title: new FormControl('', [Validators.required]),
    //year: new FormControl('', [Validators.required]),
  //})

 // ngOnInit(): void {
 // }
  
 // submit(){
  //  this.employee.name = this.form.get("name")?
  //  this.employee.surname=this.form.get("surname")?
   // this.employee.salary=this.form.get("salary")?
   // this.employee.department=this.form.get("department")?
    


  //  console.log(this.employee)

    //this.service.addEmployee(this.employee).subscribe(data => {
     // console.log(data)
  //  })
   // this.router.navigate(['/']);
  }

 // submitpr(){
    
    //this.employee.projects.push(this.formpr.value)
  //}
//}
