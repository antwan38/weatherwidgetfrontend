import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {TestService} from "./test/test.service";
import {WidgetService} from "./widget/widget.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { WidgetComponent } from './widget/widget.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GridComponent } from './grid/grid.component';
import { AddWidgetFormComponent } from './add-widget-form/add-widget-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    WidgetComponent,
    NavbarComponent,
    GridComponent,
    AddWidgetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TestService, WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
