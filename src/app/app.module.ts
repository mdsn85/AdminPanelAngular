
import { NavComponent } from './secure/nav/nav.component';

import { SecureComponent } from './secure/secure.component';
import { SecureModule } from './secure/secure.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './secure/menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    SecureComponent,
    NavComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  exports:[
    MenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
