import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  output = 0;
  public num1:any;
  public num2:any;
  constructor(private sharedService:SharedService){

  }
  
  sumFunction1(){

    this.output =  this.sharedService.calculate(this.num1,this.num2);
    console.log(this.output);
  }


}
