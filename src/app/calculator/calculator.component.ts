import { Component } from '@angular/core';

import {
    OPERATION_SET_OPERATOR, 
    OPERATION_SET_NUMBER, 
    OPERATION_SET_VALUE,
    OPERATION_CLEAN_ALL,
    OPERATION_EVALUATE,

    BUTTONS
} from './calculator.constants';

import { CalculatorService } from './calculator.service'; 

import { isOperatorLast, isFullExpression } from './calculator.helpers';

import './calculator.css';


@Component({
  selector: 'calculator',
  providers: [ CalculatorService ],
  template: require('./calculator.component.html'),
})
export class CalculatorComponent {
    calculatorService: CalculatorService;
    buttons: Array<Array<CaclulatorButton>>;
    value: string;
    operation: string;
    calculations: CalculationsType;

    constructor(calculatorService: CalculatorService) {
        this.value = '0';
        this.operation = '0';
        this.buttons = BUTTONS;
        this.calculatorService = calculatorService;
        this.updateCalculations();
    }

    private updateCalculations() {
        this.calculatorService.getCalculations()
            .subscribe(
                (calculations) => {
                    this.calculations = calculations;
                }
            );
    }

    public clickButton(handler: (value: string) => string, operationType: ButtonOperationType) {
        switch(operationType) {
            case OPERATION_SET_VALUE:
            case OPERATION_SET_OPERATOR:
            case OPERATION_SET_NUMBER:
                this.value = handler(this.value);
                break;

            case OPERATION_CLEAN_ALL:
                this.value = '0';
                this.operation = '0';
                break;

            case OPERATION_EVALUATE:
                if (isFullExpression(this.value)) {
                    this.operation = this.value;
                    try {
                        this.value = eval(`;(function() { return ${this.value}; })();`).toString();
                        this.calculatorService.saveCalculation(this.operation)
                            .subscribe((calculation: Calculation) => {
                                this.updateCalculations();
                            });
                    }
                    catch (e) {
                        console.trace('Something went wrong', e);
                    }
                }
                else {
                    alert('Invalid expression');
                }
            default:
                break;
        }
    }
};
