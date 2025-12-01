import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/todo-list', pathMatch: 'full'
  },
  { 
    path: 'todo-list',
    loadChildren: () => import('mfe1-app/TodoListModule').then(m => m.TodoListModule)
  },
  {
    path: 'todo-detail',
    loadChildren: () => import('mfe2-app/TodoDetailModule').then(m => m.TodoDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
