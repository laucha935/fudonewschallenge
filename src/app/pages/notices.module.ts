import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoticesRoutingModule } from './notices-routing.module';
import { NoticesHomeComponent } from './notices-home/notices-home.component';
import { FooterComponent } from '../@shared/components/footer/footer.component';
import { NoticeReadComponent } from './notice-read/notice-read.component';
import { AuthorNamePipe } from '../@shared/pipes/authorName.pipe';
import { SharedModule } from '../@shared/shared.module';

@NgModule({
  imports: [CommonModule, NoticesRoutingModule, SharedModule],
  declarations: [NoticesHomeComponent, NoticeReadComponent, AuthorNamePipe],
})
export class NoticesModule {}
