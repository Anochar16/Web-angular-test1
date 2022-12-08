import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { AddFoodComponent } from './add-food/add-food.component';
import { CompListComponent } from './comp-list/comp-list.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Route } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    AddFoodComponent, CompListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    , TabViewModule, TableModule, FormsModule, ButtonModule, DialogModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
