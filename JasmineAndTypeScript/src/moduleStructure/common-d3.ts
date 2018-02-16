import * as common from "./common-base"; 

export function someD3Function(x: number, y: number): number {
    return common.someCommonFunction(x, y) + common.SOME_CONST;
}