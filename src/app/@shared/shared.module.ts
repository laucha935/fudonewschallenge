import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NoticesService } from './services/notices.service';
import { AuthorNamePipe } from './pipes/authorName.pipe';
import { BtnResponsiveComponent } from './components/btn-responsive/btn-responsive.component';

@NgModule({
  imports: [CommonModule],
  exports: [NavbarComponent, FooterComponent, BtnResponsiveComponent],
  declarations: [NavbarComponent, FooterComponent, BtnResponsiveComponent],
  providers: [],
})
export class SharedModule {}
