import { Component } from '@angular/core';

import {
    OPERATION_SET_OPERATOR, 
    OPERATION_SET_NUMBER, 
    OPERATION_SET_VALUE,
    OPERATION_CLEAN_ALL,
    OPERATION_EVALUATE,

    BUTTONS
} from './calculator.constants';
import { isOperatorLast, isFullExpression } from './calculator.helpers';

import './calculator.css';


@Component({
  selector: 'calculator',
  template: require('./calculator.component.html'),
})
export class CalculatorComponent {
    buttons: Array<Array<CaclulatorButton>>;
    value: string;
    operation: string;

    constructor() {
        this.value = '0';
        this.operation = '0';

        this.buttons = BUTTONS;
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
                    this.value = eval(`;(function() { return ${this.value}; })();`).toString();
                }
                else {
                    alert('Invalid expression');
                }

            default:
                break;
        }
    }
};
