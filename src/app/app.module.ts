import { PublicComponent } from './public/public.component';
import { RegisterComponent } from './public/register/register.component';
import { LoginComponent } from './public/login/login.component';
import { PublicModule } from './public/public.module';

import { NavComponent } from './secure/nav/nav.component';

import { SecureComponent } from './secure/secure.component';
import { SecureModule } from './secure/secure.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './secure/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsignerComponent } from './components/newsigner/newsigner.component';
@NgModule({
  declarations: [
    AppComponent,
    NewsignerComponent,
    NewsignerComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PublicModule,
    SecureModule


  ],
  exports:[
    MenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
