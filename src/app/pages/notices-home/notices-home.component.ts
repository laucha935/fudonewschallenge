import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Notice } from 'src/app/@shared/models/notice.model';
import { NoticesService } from 'src/app/@shared/services/notices.service';
import { SaveNotice } from 'src/app/store/store.actions';

@Component({
  selector: 'app-notices-home',
  templateUrl: './notices-home.component.html',
  styleUrls: ['./notices-home.component.scss'],
})
export class NoticesHomeComponent implements OnInit {
  @ViewChild('element') containerElem: ElementRef;
  @HostListener('window:scroll', ['$event'])
  notices: any;
  isLoading: boolean;
  showBtnTop: boolean;
  constructor(
    private notiService: NoticesService,
    private route: Router,
    private store: Store<any>
  ) {
    this.notices = [];
    this.isLoading = true;
    this.showBtnTop = false;
  }
  ngOnInit(): void {
    this.notiService.showHome$.next(false);
    this.notiService.getNotices().subscribe((res: any) => {
      this.notices = res.notices.map((elem: any) => {
        if (elem.urlToImage === null) {
          return {
            ...elem,
            urlToImage: '../../../assets/images/noticia-defecto.jpeg',
          };
        }
        return elem;
      });
      this.isLoading = false;
    });
  }

  clickCard(event: any) {
    let noticeStore: Notice = {
      author: event.author,
      content: event.content,
      source: event.source.name,
      title: event.title,
      urlImage: event.urlToImage,
      description: event.description,
    };
    this.store.dispatch(SaveNotice({ notice: noticeStore }));
    this.route.navigateByUrl('notices/read-notice');
  }

  scrollEvent(event: any) {
    if (this.containerElem.nativeElement.scrollTop > 20) {
      this.showBtnTop = true;
    } else {
      this.showBtnTop = false;
    }
  }

  actionButton() {
    this.containerElem.nativeElement.scrollTop = 0;
  }
}
