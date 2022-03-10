import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstNumber:any;
  secondNumber:any;
  result:any;
  constructor() { }

  ngOnInit(): void {
  }

  add()
  {
    this.result=parseInt(this.firstNumber)+parseInt(this.secondNumber);
  }

  sub()
  {
    this.result=parseInt(this.firstNumber)-parseInt(this.secondNumber);
  }

  multiply()
  {
    this.result=parseInt(this.firstNumber)*parseInt(this.secondNumber);
  }

  divide (){
    this.result=parseInt(this.firstNumber)/parseInt(this.secondNumber);
  }

}
