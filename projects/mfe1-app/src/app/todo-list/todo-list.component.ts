import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [],
})
export class TodoListComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
    console.log('Todo List');
    const event = new CustomEvent('header', {
      detail: {
        name: 'Todo List',
      }
    });
    dispatchEvent(event);

    const eventTitle = new CustomEvent('headerTitle', {detail: {title: 'Todo List Title'}});
    dispatchEvent(eventTitle);
  }
}
