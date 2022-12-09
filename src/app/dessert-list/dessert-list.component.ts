import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dessert-list',
  templateUrl: './dessert-list.component.html',
  styleUrls: ['./dessert-list.component.scss']
})
export class DessertListComponent {
  @Output() dessertEvent = new EventEmitter<string>;
  @Input() AddDessert! :string
  dessert = ['???']

  onclickAdd(value: string) {
    const index = this.dessert.indexOf(value)
    this.dessertEvent.emit(this.dessert.at(index))
    console.log(this.dessert)
  }
ngOnChanges(){
  this.fAdddessert(this.AddDessert)
}

fAdddessert(newdrink :string){
if(newdrink){
  this.dessert.push(newdrink)
}
}
onclickDelete(value : string){
  const id = this.dessert.indexOf(value)
  this.dessert.splice(id,1)
 }
}
