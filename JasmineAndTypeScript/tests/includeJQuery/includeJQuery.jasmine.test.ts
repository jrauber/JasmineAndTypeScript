import * as mod from '../../src/includeJQuery/module-with-jquery';

describe("include", function () {
    it("callModuleWithJQuery", function () {

        mod.addTestParagraph(1, "Test");
        mod.addTestParagraph(2, "Test");
        mod.addTestParagraph(3, "Test");
        mod.addTestParagraph(4, "Test");

        let content = mod.readParagraphs();

        expect(content[0].index).toEqual(0);
        expect(content[0].content).toEqual("Test1");
    });
});

