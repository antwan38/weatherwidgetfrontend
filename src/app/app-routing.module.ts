import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWidgetFormComponent} from "./add-widget-form/add-widget-form.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {GridComponent} from "./grid/grid.component";
import {SigninComponent} from "./signin/signin.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'addWidgetForm/:id', component: AddWidgetFormComponent},
  { path: 'addWidgetForm', component: AddWidgetFormComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'home', component: GridComponent},
  { path: 'nav', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
