import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  headerListener: any;
  headerName: string | undefined;
  headerTitle: string | undefined;
  destroy$ = new Subject<void>();

  ngOnInit() {
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
