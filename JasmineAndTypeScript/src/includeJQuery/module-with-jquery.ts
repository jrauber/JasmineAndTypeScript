import * as $ from "jquery";

export function addTestParagraph(id : number, content : string) {

    $("body").append(`<p id="para${id}" class="para">${content}${id}</p>`);
}

export function readParagraphs() : ParaElem[] {

    let result: ParaElem[] = [];

    $(".para").each((i, e) => result.push({ "index": i, "content": e.innerHTML }));

    return result;
}

export interface ParaElem {
    index: number,
    content: string
}