import { Project } from "./Project"
export class Employee{
    id:number
    name:string
    surname:string
    salary:number
    department:string
    projects:Project[]

    constructor( id:number,name: string, salary:number,surname: string,department:string, projects: Project[]) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.surname = surname;
        this.department = department;
        this.projects = projects;
      }

     
}
