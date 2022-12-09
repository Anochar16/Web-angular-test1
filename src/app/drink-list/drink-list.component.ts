import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent {
  @Output() drinkEvent = new EventEmitter<string>;
  @Input() AddDrink!:string
  drinks = ["milk", "papsi"];


  onclickAdd(value: string) {
    const index = this.drinks.indexOf(value)
    this.drinkEvent.emit(this.drinks.at(index))
    console.log(this.drinks)
  }
ngOnChanges(){
  this.fAdddrink(this.AddDrink)
}

fAdddrink(newdrink :string){
if(newdrink){
  this.drinks.push(newdrink)
}
}
onclickDelete(value : string){
  const id = this.drinks.indexOf(value)
  this.drinks.splice(id,1)
 }
}
