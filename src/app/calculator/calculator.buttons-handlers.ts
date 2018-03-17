import {
    isOperatorLast, 
    canSetDot, 
    canSetOpenBracket,
    canSetCloseBracket
} from './calculator.helpers';


export function setNumber(value: string): string {
    if (value === '0') {
        return this.caption;
    }

    return value + this.caption;
}

export function setOperator(value: string): string {
    if (value.slice(-1) === '.' || (value.slice(-1) === '(' && this.caption !== '-')) {
        return value;
    }

    if (isOperatorLast(value)) {
        return value.slice(0, -1) + this.caption;
    }

    return value + this.caption;
}

export function setDot(value: string): string {
    if (canSetDot(value)) {
        return value + this.caption;
    }
    return value;
}

export function setOpenBracket(value: string): string {
    if (value === '0') {
        return this.caption;
    }

    if (canSetOpenBracket(value)) {
        return value + this.caption;
    }

    return value;
}

export function setCloseBracket(value: string): string {
    if (canSetCloseBracket(value)) {
        return value + this.caption;
    }

    return value;
}
