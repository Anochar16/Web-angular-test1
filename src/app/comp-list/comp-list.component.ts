import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-comp-list',
  templateUrl: './comp-list.component.html',
  styleUrls: ['./comp-list.component.scss']
})


export class CompListComponent {
  @Output() FoodEvent = new EventEmitter<string>;
  @Input() AddFood!: string;

  foods = ["somtam", "kaiyan"];


  onclickAdd(value: string) {
    const index = this.foods.indexOf(value)
    this.FoodEvent.emit(this.foods.at(index))
    console.log(this.foods)
  }


  ngOnChanges() {
    this.fAddFoods(this.AddFood)
  }

  fAddFoods(newAddfood: string) {
    if (newAddfood) {
      this.foods.push(newAddfood)
    }
  }
  onclickDelete(value : string){
    const id = this.foods.indexOf(value)
    this.foods.splice(id,1)
   }
}