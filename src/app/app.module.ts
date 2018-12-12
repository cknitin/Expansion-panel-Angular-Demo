import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpansionPanelPageComponent } from './components/expansion-panel-page/expansion-panel-page.component';

import {
  IgxIconModule, IgxExpansionPanelModule,	IgxInputGroupModule
 } from 'igniteui-angular';
import { ExpansionPanelRegistrationComponent } from './components/expansion-panel-registration/expansion-panel-registration.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExpansionPanelPageComponent,
    ExpansionPanelRegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    IgxIconModule,
    IgxExpansionPanelModule,
    IgxInputGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
