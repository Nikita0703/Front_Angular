import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Employee } from 'src/app/Employee';
import { EmployeeId } from 'src/app/EmployeeId'

@Component({
  selector: 'app-updateuser',
  templateUrl: './uppdateuser.component.html',
  styleUrls: ['./uppdateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  emp?: any;
  data: any;
  form: FormGroup;
  projectForm:FormGroup;
  carForm:FormGroup;
  houseForm:FormGroup;
  petForm:FormGroup;

  car:any;
  house:any;
  pets:any[];
  employee: any;
  projects:any[]
  
  constructor(
    private service: AppService,
     private route: ActivatedRoute, 
     private router : Router,
     private fb:FormBuilder) {
      this.form = this.fb.group({
        id: new FormControl('',[Validators.required]),
        name: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required]),
        salary: new FormControl('', [Validators.required]),
        department: new FormControl('', [Validators.required])
      })
     
      this.carForm = this.fb.group({
        model: ['', Validators.required],
        made: ['', Validators.required]
      });
  
      this.houseForm = this.fb.group({
        adress: ['', Validators.required],
        flour: ['', Validators.required],
        flat: ['', Validators.required],
      });
  
      this.petForm = this.fb.group({
        vid: ['', Validators.required],
        petname: ['', Validators.required]
      });
     
      this.projectForm = this.fb.group({
       
        title: new FormControl('', [Validators.required]),
        year: new FormControl('', [Validators.required]),
       
      })

      this.projects=[]
      this.pets=[]
      }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];
    this.service.getEmployeeById(id).subscribe(data => {
      this.emp = data
      console.log(this.emp)

      this.form.patchValue({
        id:this.emp.id,
        name: this.emp.name,
        surname: this.emp.surname,
        salary: this.emp.salary,
        department: this.emp.department
      });

      this.carForm.patchValue({
        model: this.emp.car.model,
        made: this.emp.car.made,
      });

      this.houseForm.patchValue({
        adress: this.emp.house.adress,
        flour: this.emp.house.flour,
        flat:this.emp.house.flat
      });

    
    })
    
  

  }

 

  submit(){
    this.data = this.form.value
   
    this.employee = {...this.data,car:this.car,house:this.house,pets:this.pets.concat(), projects:this.projects.concat()}
   
    this.service.updateUser(this.employee).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
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
  

}