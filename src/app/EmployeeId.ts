import { Project } from "./Project"
export class EmployeeId{
 
    name:any
    surname:any
    salary:any
    department:any
    projects:any[]

    constructor( name: any, salary:any,surname: any,department:any, projects: Project[]) {
      
        this.name = name;
        this.salary = salary;
        this.surname = surname;
        this.department = department;
        this.projects = projects;
      }
 
}