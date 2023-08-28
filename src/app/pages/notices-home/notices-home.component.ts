import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Notice } from 'src/app/@shared/models/notice.model';
import { NoticesService } from 'src/app/@shared/services/notices.service';
import { SaveNotice } from 'src/app/store/store.actions';

@Component({
  selector: 'app-notices-home',
  templateUrl: './notices-home.component.html',
  styleUrls: ['./notices-home.component.scss'],
})
export class NoticesHomeComponent implements OnInit, OnDestroy {
  // Para obtener el scroll del elemento que en este caso es el div contenedor de las cards
  @ViewChild('element') containerElem: ElementRef;
  // Para escuchar el evento de window:scroll
  @HostListener('window:scroll', ['$event'])
  // Es la variable que se le asigna el array de noticias provenientes de la API
  notices: any;
  // Flag para mostrar o esconder el spinner de carga y por ende mostrar las noticias una vez cargadas
  isLoading: boolean;
  // Flag para mostrar el button toTop en relacion al evento de scrolleo
  unsubscribe$: Subject<boolean>;
  showBtnTop: boolean;
  constructor(
    private notiService: NoticesService,
    private route: Router,
    private store: Store<any>
  ) {
    this.notices = [];
    this.isLoading = true;
    this.showBtnTop = false;
    this.unsubscribe$ = new Subject<boolean>();
  }
  ngOnInit(): void {
    this.notiService.showHome$.next(false);
    this.notiService
      .getNotices()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: any) => {
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

  /**
   * Permite al usuario poder ir a leer una noticia completa a la otra pagina, asignando la noticia en store
   *@param event contiene la noticia a leer en la otra
   */

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

  /**
   * Escucha el scrolleo del div contenedor de cards, para poder mostrar el button To Top
   * @param event
   */

  scrollEvent(event: any) {
    if (this.containerElem.nativeElement.scrollTop > 20) {
      this.showBtnTop = true;
    } else {
      this.showBtnTop = false;
    }
  }

  /**
   * desliza al usuario hacia arriba de la pantalla en version mobile una vez que scrolleo hacia abajo
   */
  actionButton() {
    this.containerElem.nativeElement.scrollTop = 0;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
  }
}
