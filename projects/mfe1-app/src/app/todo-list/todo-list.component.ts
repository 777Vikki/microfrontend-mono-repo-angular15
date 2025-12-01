import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [],
})
export class TodoListComponent implements OnInit{
  @Output() dataFromMfe1 = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    
  }

  sendData() {
    this.dataFromMfe1.emit('Hello from MFE!');
  }
}
