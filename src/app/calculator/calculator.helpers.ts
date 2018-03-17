import {OPERATORS} from './calculator.constants';


export function isOperatorLast(value: string): boolean {
    return OPERATORS.indexOf(value.slice(-1)) !== -1;
}


export function isFullExpression(value: string): boolean {
    const openBracketCount = (value.match(/\(/g) || []).length;
    const closeBracketCount = (value.match(/\)/g) || []).length;
    const fullExpressionRegex = /^(\(+)?-?((\d+)|(\d+\.\d+(e\+)?\d+))(\)+)?([/*+-](\(+-?)?((\d+)|(\d+\.\d+(e\+)?\d+))(\)+)?)+$/;
    return fullExpressionRegex.test(value) && openBracketCount === closeBracketCount;
}

export function canSetDot(value: string): boolean {
    const canSetDotRegexp = /^(\(+)?-?(\d+$)|((\(+)?-?(\d+\.\d+(e\+)?\d+)|(\d+)([/*+-](\(+\-?)?(\.\d+(e\+)?\d+)|(\d+)(\)+)?)*[/*+-](\(+-?)\d+$)/;
    return canSetDotRegexp.test(value);
}

export function canSetOpenBracket(value: string): boolean {
    return OPERATORS.concat('(').indexOf(value.slice(-1)) !== -1;
}

export function canSetCloseBracket(value: string): boolean {
    const openBracketCount = (value.match(/\(/g) || []).length;
    const closeBracketCount = (value.match(/\)/g) || []).length;
    return /^\d|\)$/.test(value.slice(-1)) && openBracketCount > closeBracketCount;
}
