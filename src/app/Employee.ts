import { Car } from "./Car"
import { House } from "./House"
import { Project } from "./Project"
import { Pet } from "./Pet"

export class Employee{
    id:number
    name:string
    surname:string
    salary:number
    department:string
    car:Car
    house:House
    pets:Pet[]
    projects:Project[]

    constructor( id:number,name: string, salary:number,surname: string,department:string, car:Car,house:House,pets:Pet[],projects: Project[]) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.surname = surname;
        this.department = department;
        this.car =car;
        this.house = house;
        this.pets = pets;
        this.projects = projects;
      }

     
}
