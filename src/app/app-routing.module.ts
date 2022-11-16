import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskListComponent} from "./tasks/task-list/task-list.component";
import {TaskListFormComponent} from "./tasks/task-form/task-list-form.component";

const routes: Routes = [
  {path:'', component: TaskListComponent},
  {path:'cadastrar', component: TaskListFormComponent},
  {path:'edit/:id', component: TaskListFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
