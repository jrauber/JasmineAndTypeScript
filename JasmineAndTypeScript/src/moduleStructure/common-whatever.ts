import * as common from "./common-base"; 

export function someWhateverFunction(x: number, y: number): number {
    return common.someCommonFunction(x, y) + common.SOME_CONST;
}

export function containsWithJs(data, value, valueFunc) {

    if (valueFunc) {
        data = data.map(valueFunc);
    }

    return data.filter(function (d) { return d === value; }).length > 0;
}

export function containsWithTs<T, K extends keyof T>(values: T[], value: any, property: K) {
    return values.filter(values => values[property] == value).length > 0
}



