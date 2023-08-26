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
  showBackHome: boolean;
  showLateralMenu: boolean;
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

  goBack() {
    this.route.navigateByUrl('notices');
  }

  showLatMenu() {
    this.showLateralMenu = !this.showLateralMenu;
  }
}
