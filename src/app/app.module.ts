import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent }  from './app.component';
import { CalculatorModule } from './calculator/calculator.module';


@NgModule({
    imports: [ 
        BrowserModule,
        HttpClientModule,

        CalculatorModule
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { };
