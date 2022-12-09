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
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { DessertListComponent } from './dessert-list/dessert-list.component';




@NgModule({
  declarations: [
    AppComponent,
    AddFoodComponent, CompListComponent, HomeComponent, OrderComponent, DrinkListComponent, DessertListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    , TabViewModule, TableModule, FormsModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
