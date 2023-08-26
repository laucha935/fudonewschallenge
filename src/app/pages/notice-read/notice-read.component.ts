import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/@shared/models/apptate.model';
import { Notice } from 'src/app/@shared/models/notice.model';
import { NoticesService } from 'src/app/@shared/services/notices.service';

@Component({
  selector: 'app-notice-read',
  templateUrl: './notice-read.component.html',
  styleUrls: ['./notice-read.component.scss'],
})
export class NoticeReadComponent implements OnInit {
  notice: Notice;
  constructor(
    private store: Store<any>,
    private notiService: NoticesService,
    private route: Router
  ) {
    this.notice = {
      author: '',
      content: '',
      source: '',
      title: '',
      urlImage: '',
      description: '',
    };
  }

  ngOnInit(): void {
    this.notiService.showHome$.next(true);
    this.store.select('store').subscribe((state: AppState) => {
      if (state.notice) {
        this.notice = state.notice;
      }
    });
  }

  actionButton() {
    this.route.navigateByUrl('notices');
  }
}
