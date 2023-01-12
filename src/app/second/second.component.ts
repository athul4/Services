import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  output:Number = 0;
  num1 =0;
  num2 = 0;

  constructor(private sharedService:SharedService){

  }
 
  sumFunction2(){

    this.output = this.sharedService.calculate(this.num1,this.num2);
    console.log(this.output);
  }
}
