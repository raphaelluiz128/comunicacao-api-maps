import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LocalmapaComponent } from './localmapa/localmapa.component';
import { BlocaisService } from './blocais.service';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    LocalmapaComponent
  ],
  imports: [AgmCoreModule.forRoot({
    apiKey: 'AIzaSyDBctvt_SrXU7wenblj-j4guMiBD6TsPJM'
  }),
    BrowserModule,
    HttpClientModule
  ],
  providers: [BlocaisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
