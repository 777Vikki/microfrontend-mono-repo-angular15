import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent {
  _detail: string | undefined;
  @Input()
  set detail(value: any) {
    this._detail = value;
    console.log('MFE2 Input updated:', value);
  }

  get detail() {
    return this._detail;
  }
}
