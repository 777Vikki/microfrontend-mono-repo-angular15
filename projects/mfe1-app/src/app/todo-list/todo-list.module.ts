import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TodoListRoutingModule,
  ]
})
export class TodoListModule {}
