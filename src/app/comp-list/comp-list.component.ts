import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-list',
  templateUrl: './comp-list.component.html',
  styleUrls: ['./comp-list.component.scss']
})
export class CompListComponent {
foods = [{
 name:"somtam",
 foodDetail:"pepper , papaya ,"
}];
display : boolean = false

showDialog(){
  this.display = true
  console.log("display true")
}

}

