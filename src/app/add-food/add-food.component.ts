import { Component ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent {

  @Output() AddFoodEvent = new EventEmitter<string>;
  Onclicked(value:string){
    this.AddFoodEvent.emit(value)
  }

}

