import { Component, OnInit } from '@angular/core';
import {FormsModule }from '@angular/forms';
import {inject} from '@angular/core';
import {NgModule} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor() { }
  title = 'angularPractice';
  firstNumber :any;
  secondNumber:any;
  result:any;
  
  randomNumbers: any;
  courses=["course1","course2","course3"];

  ngOnInit(){
    
  }

  printNumbers ()
  {
    var start = new Date().getTime();
    for (let i=0;i<5000;i++)
    {}
    var end = new Date().getTime();
    var time = end - start;
    //this.randomNumbers = time;
    return 6;
  }
  
  

  
  
  AddNumber ()
  {
    this.result=this.firstNumber+this.secondNumber;
    console.log (this.result,this.firstNumber,this.secondNumber);
    return this.result;
  }

  
}
