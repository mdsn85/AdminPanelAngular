import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    SecureComponent,
    NavComponent,
    MenuComponent
],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[NavComponent,MenuComponent,SecureComponent]
})
export class SecureModule { }
