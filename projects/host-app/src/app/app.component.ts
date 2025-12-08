import { Component, OnDestroy, OnInit } from '@angular/core';
import { eventBus } from 'shared-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private callback = (data: any) => {
    console.log(data);
  };

  ngOnInit(): void {
    eventBus.subscribe('USER_LOGGED_IN', this.callback);
  }

  ngOnDestroy(): void {
    eventBus.unsubscribe('USER_LOGGED_IN', this.callback);
  }
}
