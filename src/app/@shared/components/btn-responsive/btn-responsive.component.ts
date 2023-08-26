import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-btn-responsive',
  templateUrl: './btn-responsive.component.html',
  styleUrls: ['./btn-responsive.component.scss'],
})
export class BtnResponsiveComponent implements OnInit {
  @Output() actionBtn = new EventEmitter<any>();
  @Input() styleBtn: string;
  urlToImage: string;
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

  action() {
    this.actionBtn.next(true);
  }
}
