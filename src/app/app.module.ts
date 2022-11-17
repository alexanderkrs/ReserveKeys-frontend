import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChaveListComponent } from './tasks/task-list/chave-list.component';
import { TaskListItemComponent } from './tasks/task-list-item/task-list-item.component';
import { TaskListFormComponent } from './tasks/task-form/task-list-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChaveListComponent,
    TaskListItemComponent,
    TaskListFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
