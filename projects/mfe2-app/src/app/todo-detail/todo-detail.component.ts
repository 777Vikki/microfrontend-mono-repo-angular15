import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  ngOnInit(): void {
    console.log('Todo Detail');
    const event = new CustomEvent('header', {
      detail: {
        name: 'Todo Detail',
      } 
    });
    dispatchEvent(event);

    const eventTitle = new CustomEvent('headerTitle', {detail: {title: 'Todo Detail Title'}});
    dispatchEvent(eventTitle);
  }
}
