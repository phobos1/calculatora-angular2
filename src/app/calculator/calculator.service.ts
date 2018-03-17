import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


interface Calculation {
    calculation: string,
    date: string
}

type CalculationsType = Array<Calculation>;

@Injectable()
export class ConfigService {
    calculationsUrl = '/calculations';
    constructor(private http: HttpClient) { }

    saveCalculation(calculation: string): Observable<any> {
        // return this.http.post(this.calculationsUrl, {calculation});
        return Observable.of([]);
    }

    getCalculations(): Observable<CalculationsType> {
        // return this.http.get(this.calculationsUrl);
        return Observable.of([]);
    }
}