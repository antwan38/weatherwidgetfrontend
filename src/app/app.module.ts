import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WidgetService} from "./widget/widget.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { WidgetComponent } from './widget/widget.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GridComponent } from './grid/grid.component';
import { AddWidgetFormComponent } from './add-widget-form/add-widget-form.component';
import {GridService} from "./grid/grid.service";
import {WidgetGridService} from "./add-widget-form/add-widget-form.service";
import { SigninComponent } from './signin/signin.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    NavbarComponent,
    GridComponent,
    AddWidgetFormComponent,
    SigninComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GridService, WidgetService, WidgetGridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
