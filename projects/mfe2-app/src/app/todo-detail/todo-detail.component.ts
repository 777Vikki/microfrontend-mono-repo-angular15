import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  constructor(private sharedLibService: SharedLibService) {}
  ngOnInit(): void {
    this.sharedLibService.data$.subscribe(d => {
      console.log(d);
    });
  }
}
