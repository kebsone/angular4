import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DahiraComponent } from './dahira/dahira.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { CommissionComponent } from './commission/commission.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import {ROUTES} from './app.route';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DahiraComponent,
    MultimediaComponent,
    CommissionComponent,
    ShopComponent,
    ContactComponent,
    AccueilComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)// gestions des routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
