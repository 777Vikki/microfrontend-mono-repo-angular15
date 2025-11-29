import { Component } from '@angular/core';
import { UserDetailService } from '../core/services/user-detail.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [UserDetailService],
})
export class TodoListComponent {
  constructor(private userDetailService: UserDetailService) { }

  ngOnInit(): void {
    this.userDetailService.getUserDetail()
      .subscribe(d => {
        console.log(d);
      });
  }
}
