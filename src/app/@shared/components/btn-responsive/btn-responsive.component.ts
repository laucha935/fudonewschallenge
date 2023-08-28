import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-btn-responsive',
  templateUrl: './btn-responsive.component.html',
  styleUrls: ['./btn-responsive.component.scss'],
})
export class BtnResponsiveComponent implements OnInit {
  /**
   * Evento output que emite el accionable del boton flotante responsive, depende en que componente se encuentre
   */
  @Output() actionBtn = new EventEmitter<any>();
  /**
   * Flag que filtra que icon mostrar en el button dependiendo que componente padre lo contenga
   */
  @Input() styleBtn: string;
  /**
   * ruta para mostrar la imagen de button
   */
  urlToImage: string;
  /**
   * flag que va de param al elemento html del button y su imagen contenedora
   */
  typeImg: string;

  constructor() {
    this.urlToImage = '../../../../assets/images/';
  }
  ngOnInit(): void {
    this.typeImg =
      this.styleBtn === 'home'
        ? `${this.urlToImage}home-icon.svg`
        : `${this.urlToImage}row-up.svg`;
  }

  /**
   * Emitidor de eventos del button
   */
  action() {
    this.actionBtn.next(true);
  }
}
