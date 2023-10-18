import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeId } from 'src/app/EmployeeId';
import { AppService } from 'src/app/app.service';
import { Project } from 'src/app/Project';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
 
  employeeForm: FormGroup;
  projectForm: FormGroup;
  carForm:FormGroup;
  houseForm:FormGroup;
  petForm:FormGroup;

  employee: any;
  car:any;
  house:any;
  pets:any[];
  projects:any[];
  data:any

  constructor(private service: AppService, private router: Router,private formBuilder: FormBuilder) { 
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      salary:['',Validators.required],
      department:['',Validators.required],
    });

    
    this.carForm = this.formBuilder.group({
      model: ['', Validators.required],
      made: ['', Validators.required]
    });

    this.houseForm = this.formBuilder.group({
      adress: ['', Validators.required],
      flour: ['', Validators.required],
      flat: ['', Validators.required],
    });

    this.petForm = this.formBuilder.group({
      vid: ['', Validators.required],
      petname: ['', Validators.required]
    });

    this.projectForm = this.formBuilder.group({
      title: ['', Validators.required],
      year: ['', Validators.required]
    });

    //this.employee = new Employee(0,'',0, '','', []);
    this.projects=[]
    this.pets = []
  }

  ngOnInit() {
   
  }

 async  onSubmitEmployee() {
    if (this.employeeForm.invalid) {
      return;
    }
    this.data=this.employeeForm.value;
    this.employee = {...this.data,car:this.car,house:this.house,pets:this.pets.concat(), projects:this.projects.concat()}
   
    console.log(this.projects)
    console.log(this.employee)
    

    this.service.addEmployee( this.employee).subscribe(data =>{
      console.log(data)
       
     this.router.navigate(['/']);
  }
     
      )
  }


  onSubmitCar(){
    this.car = this.carForm.value;
  }

  onSubmitHouse(){
    this.house = this.houseForm.value;
  }

  onSubmitPet(){
    const pet = this.petForm.value;
    this.pets.push(pet);

    this.petForm.reset();
  }

  async onSubmitProject() {
    if (this.projectForm.invalid) {
      return;
    }

    //const title =  await this.projectForm.get("title");
   // const year =  await this.projectForm.get("year");

    const project = this.projectForm.value;
    await (this.projects.push(project));

    this.projectForm.reset();
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
