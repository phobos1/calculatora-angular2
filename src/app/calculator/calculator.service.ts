import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { localStorage } from '../../utils/localStorage';


const CALCULATIONS_STORAGE_KEY = 'calculations';

@Injectable()
export class CalculatorService {
    calculationsUrl: string = '/calculations';

    constructor(private http: HttpClient) { }

    saveCalculation(calculation: string): Observable<any> {
        /// SERVER WORKS
        const datePipe = new DatePipe('en-US');
        const calcDate = datePipe.transform(new Date(), 'hh:mm:ss yyyy-MM-dd');
        const calculationObj: Calculation = {
            date: calcDate,
            calculation: calculation
        };
        const calculations = localStorage.getObject(CALCULATIONS_STORAGE_KEY, []);
        calculations.push(calculationObj);
        localStorage.setObject(CALCULATIONS_STORAGE_KEY, calculations);
        const calcObservable = new Subject();
        setTimeout(() => {
            calcObservable.next(calculationObj)
        }, 0)
        //// END SERVER WORKS

        // return this.http.post(this.calculationsUrl, {calculation});
        return calcObservable;
    }

    getCalculations(): Observable<any> {
        /// SERVER WORKS
        const calculations = localStorage.getObject(CALCULATIONS_STORAGE_KEY, []);
        const calcObservable = new Subject();
        setTimeout(() => {
            calcObservable.next(calculations);
        }, 0)
        //// END SERVER WORKS

        // return this.http.get(this.calculationsUrl);
        return calcObservable;
    }
}
