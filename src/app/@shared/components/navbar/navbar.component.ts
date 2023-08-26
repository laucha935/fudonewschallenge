import { Component, OnInit } from '@angular/core';
import { NoticesService } from '../../services/notices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showBackHome: boolean;

  constructor(private service: NoticesService, private route: Router) {
    this.showBackHome = false;
  }

  ngOnInit(): void {
    this.service.showHome$.subscribe((result) => {
      this.showBackHome = result;
    });
  }

  goBack() {
    this.route.navigateByUrl('notices');
  }
}
