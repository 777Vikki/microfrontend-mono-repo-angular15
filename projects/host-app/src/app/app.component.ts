import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('mfe1ContainerTodoList', { read: ViewContainerRef, static: true })
  vc1!: ViewContainerRef;
  @ViewChild('mfe2ContainerTodoList', { read: ViewContainerRef, static: true })
  vc2!: ViewContainerRef;

  constructor(private sharedLibService: SharedLibService) {}

  async ngOnInit() {
    const m1 = await import('mfe1-app/TodoListComponent');
    const m2 = await import('mfe2-app/TodoDetailComponent');
    
    const comp1 = m1.TodoListComponent;
    const comp2 = m2.TodoDetailComponent;
    
    this.vc1.createComponent(comp1);
    this.vc2.createComponent(comp2); 
    
    this.sharedLibService.data$.subscribe(d => {
      console.log(d);
    });
  }
}
