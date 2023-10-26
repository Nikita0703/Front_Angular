import { Employee } from "./Employee"
export class Project{
    id:any
    title:string
    year:number

    constructor(id:any,title: string, year: number) {
   this.id = id;
      this.title = title;
    this.year = year;
  }
}
