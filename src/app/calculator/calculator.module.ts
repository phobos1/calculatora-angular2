import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CalculatorComponent }  from './calculator.component';


@NgModule({
    imports: [ 
        BrowserModule,
        HttpClientModule
    ],
    declarations: [ CalculatorComponent ],
    exports: [ CalculatorComponent ]
})
export class CalculatorModule { };
