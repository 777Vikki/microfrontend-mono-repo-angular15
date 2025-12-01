import { Component, OnInit } from '@angular/core';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [],
})
export class TodoListComponent implements OnInit{
  constructor(private sharedLibService: SharedLibService) {}

  ngOnInit(): void {

  }

  sendData() {
    this.sharedLibService.sendMessage('MFE trigered');
  }
}
