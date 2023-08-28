import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AppState } from 'src/app/@shared/models/apptate.model';
import { Notice } from 'src/app/@shared/models/notice.model';
import { NoticesService } from 'src/app/@shared/services/notices.service';

@Component({
  selector: 'app-notice-read',
  templateUrl: './notice-read.component.html',
  styleUrls: ['./notice-read.component.scss'],
})
export class NoticeReadComponent implements OnInit, OnDestroy {
  /**
   * Var que contiene la noticia a leer por el user, y mostrarse en la pagina
   */
  notice: Notice;
  unsubscribe$: Subject<boolean>;
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
    this.unsubscribe$ = new Subject<boolean>();
  }

  ngOnInit(): void {
    this.notiService.showHome$.next(true);
    this.store
      .select('store')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((state: AppState) => {
        if (state.notice) {
          this.notice = state.notice;
        }
      });
  }

  /**
   * Devuelve al user a la home para poder visuzaliar el listado de noticias
   */
  actionButton() {
    this.route.navigateByUrl('notices');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
  }
}
