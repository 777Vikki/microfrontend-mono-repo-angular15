import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  headerListener: any;
  headerName: string | undefined;
  headerTitle: string | undefined;
  destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.headerListener = (e: any) => {
      this.headerName = e?.detail?.name;
    }
    window.addEventListener('header', this.headerListener);

    fromEvent(window, 'headerTitle').pipe(takeUntil(this.destroy$)).subscribe((d: any) => {
      this.headerTitle = d?.detail?.title;
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('header', this.headerListener);
    this.destroy$.next();
    this.destroy$.complete();
  }
}
