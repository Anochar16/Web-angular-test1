import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  foods!: string;
  fwafood!: string;
  fwdrink!: string;
  fwdessert!:string;

  addFoodEvent($event: string): void {
    this.foods = $event
  }
  addFoodEvent2($event: string): void {
    this.fwafood = $event
  }
  addFoodEvent3($event: string): void {
    this.fwdrink = $event
  }
  addFoodEvent4($event: string): void {
    this.fwdessert = $event
  }
}
