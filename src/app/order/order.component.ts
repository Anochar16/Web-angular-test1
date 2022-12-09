import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  foodOder =["BBQ","salad"]
 
  onclickDelete(value : string){
    const id = this.foodOder.indexOf(value)
    this.foodOder.splice(id,1)
   }

   @Input() foodEvent!:string;
   @Input() DrinkEvent!:string;
   @Input() DessertEvent!:string;

   ngOnChanges(): void{
    if(this.foodEvent){
     this.addfood(this.foodEvent)
;}
     else{
    if(this.DrinkEvent){
     this.addfood(this.DrinkEvent)
    ;}
    else{
      this.addfood(this.DessertEvent)
    }
   }}
   
   addfood(newfood: string){
     if(newfood ){
       this.foodOder.push(newfood);
   }
  }
}
