import {Button} from './calculator.models';
import { 
    setOperator, 
    setNumber,
    setDot,
    setOpenBracket,
    setCloseBracket
} from './calculator.buttons-handlers';


export const OPERATION_SET_NUMBER = 'setNumber';
export const OPERATION_SET_VALUE = 'setValue';
export const OPERATION_SET_OPERATOR = 'operator';
export const OPERATION_CLEAN_ALL = 'cleanAll';
export const OPERATION_EVALUATE = 'evaluate';
export const OPERATORS = ['+', '-', '*', '/'];

export const BUTTONS: Array<Array<CaclulatorButton>> = [
    // First row
    [
        new Button(
            '⟵',
            OPERATION_SET_VALUE,
            (value: string): string => {
                if (value.length > 1) {
                    value.slice(-1);
                    return value.slice(0, -1);
                }
                return '0';
            },
            'button__2x'
        ),
        new Button(
            'CE',
            OPERATION_SET_VALUE,
            (value: string): string => '0',
        ),
        new Button(
            'C',
            OPERATION_CLEAN_ALL,
            (value: string): string => '0',
        ),
    ],
    // Second row
    [
        new Button(
            '7',
            OPERATION_SET_NUMBER,
            setNumber,
        ),
        new Button(
            '8',
            OPERATION_SET_NUMBER,
            setNumber
        ),
        new Button(
            '9',
            OPERATION_SET_NUMBER,
            setNumber
        ),
        new Button(
            '/',
            OPERATION_SET_OPERATOR,
            setOperator
        ),
    ],
    // Third row
    [
        new Button(
            '4',
            OPERATION_SET_NUMBER,
            setNumber,
        ),
        new Button(
            '5',
            OPERATION_SET_NUMBER,
            setNumber
        ),
        new Button(
            '6',
            OPERATION_SET_NUMBER,
            setNumber
        ),
        new Button(
            '*',
            OPERATION_SET_OPERATOR,
            setOperator
        ),
    ],
    // Fourth row
    [
        new Button(
            '1',
            OPERATION_SET_NUMBER,
            setNumber,
        ),
        new Button(
            '2',
            OPERATION_SET_NUMBER,
            setNumber
        ),
        new Button(
            '3',
            OPERATION_SET_NUMBER,
            setNumber
        ),
        new Button(
            '-',
            OPERATION_SET_OPERATOR,
            setOperator
        ),
    ],
    // Fifth row
    [
        new Button(
            '0',
            OPERATION_SET_NUMBER,
            setNumber,
            'button__2x'
        ),
        new Button(
            '.',
            OPERATION_SET_NUMBER,
            setDot
        ),
        new Button(
            '+',
            OPERATION_SET_OPERATOR,
            setOperator
        ),
    ],
    // Sixth row
    [
        new Button(
            '(',
            OPERATION_SET_OPERATOR,
            setOpenBracket
        ),
        new Button(
            ')',
            OPERATION_SET_OPERATOR,
            setCloseBracket
        ),
        new Button(
            '=',
            OPERATION_EVALUATE,
            (value: string): string => value,
            'button__2x'
        ),
    ]
];

