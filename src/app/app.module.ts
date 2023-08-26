import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticesModule } from './pages/notices.module';
import { SharedModule } from './@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { storeReducer } from './store/store.reducer';
import { StoreEffects } from './store/store.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoticesModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({store: storeReducer}),
    EffectsModule.forRoot([StoreEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
