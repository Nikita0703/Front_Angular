import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UpdateuserComponent } from './components/uppdateuser/uppdateuser.component';
import { ViewusersComponent } from './components/viewuser/viewuser.component';

const routes: Routes = [
  { path: '', component: ViewusersComponent },
  { path: 'add', component: AdduserComponent },
  { path: 'update/:id', component: UpdateuserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }