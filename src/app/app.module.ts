import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { AngularCrudComponent } from './angular-crud/angular-crud.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { CalculatorAllComponent } from './calculator-all/calculator-all.component';
import { FormPracticeComponent } from './form-practice/form-practice.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    AngularCrudComponent,
    EmployeeDashboardComponent,
    CalculatorAllComponent,
    FormPracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
