import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

@Component({
  selector: 'app-calculator-all',
  templateUrl: './calculator-all.component.html',
  styleUrls: ['./calculator-all.component.css']
})
export class CalculatorAllComponent implements OnInit {

  value=0;
  sum=0;

  constructor() { }

  ngOnInit(): void {
    
  }
  executeValue(value: any)
    {
      this.value=this.value*10+this.sum;
      this.sum++;
      console.log(value);
      return value;
    }

}
