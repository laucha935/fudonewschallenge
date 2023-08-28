import { Component, OnInit } from '@angular/core';
import { NoticesService } from '../../services/notices.service';
import { Router } from '@angular/router';
import { PageLatDesc } from '../../models/pages-lateral.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  /**
   * Flag que permite mostrar o esconder el button
   */
  showBackHome: boolean;
  /**
   * Flag que muestra o esconde el menu lateral de la barra
   */
  showLateralMenu: boolean;
  /**
   * Array de paginas para poder navegar desde las noticias
   */
  pagesLateralMenu: PageLatDesc[] = [
    {
      name: 'Sports',
      url: 'https://www.espn.com.ar/',
    },
    {
      name: 'Science',
      url: 'https://www.elmundo.es/ciencia-y-salud/ciencia.html',
    },
    {
      name: 'Read Clarin',
      url: 'https://www.clarin.com/',
    },
    {
      name: 'Read Infobae',
      url: 'https://www.infobae.com/',
    },
  ];

  constructor(private service: NoticesService, private route: Router) {
    this.showBackHome = false;
    this.showLateralMenu = false;
  }

  ngOnInit(): void {
    this.service.showHome$.subscribe((result) => {
      this.showBackHome = result;
    });
  }

  /**
   * Permite al user volver al home para ver las noticias
   */
  goBack() {
    this.route.navigateByUrl('notices');
  }

  /**
   * Permite mostrar o esconder el menu lateral
   */
  showLatMenu() {
    this.showLateralMenu = !this.showLateralMenu;
  }
}
