import { RouterModule, Routes } from "@angular/router";
import { NoticesHomeComponent } from "./notices-home/notices-home.component";
import { NgModule } from "@angular/core";
import { NoticeReadComponent } from "./notice-read/notice-read.component";


const routes: Routes = [
  {
    path: '',
    component: NoticesHomeComponent
  },
  {
    path:'read-notice',
    component: NoticeReadComponent
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticesRoutingModule {}
