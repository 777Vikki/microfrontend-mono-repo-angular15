import { Component, OnInit } from '@angular/core';
import { eventBus } from 'shared-lib';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [],
})
export class TodoListComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
    eventBus.publish('USER_LOGGED_IN', { id: 101, name: 'Vivek' });
  }
}
