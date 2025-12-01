import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

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

  // constructor(private vc: ViewContainerRef) {}

  async ngOnInit() {
    const m1 = await import('mfe1-app/TodoListComponent');
    const m2 = await import('mfe2-app/TodoDetailComponent');
    
    const comp1 = m1.TodoListComponent;
    const comp2 = m2.TodoDetailComponent;
    
    const compRef1 = this.vc1.createComponent(comp1) as ComponentRef<InstanceType<typeof comp1>>;
    const compRef2 = this.vc1.createComponent(comp2) as ComponentRef<InstanceType<typeof comp1>>;
    // Listen to Output Event
    compRef1.instance.dataFromMfe1.subscribe((value: string) => {
      compRef2.instance.detail = value;
    });
  }
}
