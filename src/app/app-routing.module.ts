import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWidgetFormComponent} from "./add-widget-form/add-widget-form.component";
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {GridComponent} from "./grid/grid.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'addWidgetForm/:id', component: AddWidgetFormComponent},
  { path: 'addWidgetForm', component: AddWidgetFormComponent},
  { path: 'home', component: GridComponent},
  { path: 'nav', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
