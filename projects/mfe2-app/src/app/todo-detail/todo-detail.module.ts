import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoDetailComponent } from './todo-detail.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TodoDetailComponent, pathMatch: 'full', },
    ])
  ]
})
export class TodoDetailModule { }
