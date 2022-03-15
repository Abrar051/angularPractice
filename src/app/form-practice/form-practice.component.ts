import { Component, OnInit,NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-practice',
  templateUrl: './form-practice.component.html',
  styleUrls: ['./form-practice.component.css']
})
export class FormPracticeComponent implements OnInit {

  emailMain="email";
  passwordMain="password";
  email: string | undefined;
  password: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  validation ()
  {
    if (this.email==this.emailMain && this.password==this.passwordMain)
    {
      alert("Login done successfully");
    }
    else{
      alert ("Please try again");
    }
  }

}
