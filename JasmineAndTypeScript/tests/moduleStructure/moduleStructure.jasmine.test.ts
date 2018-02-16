import * as common from '../../src/moduleStructure/common';

describe("modules", function () {
    it("callModuleFunctions", function () {

        var data = [{
            id: 5,
            label: "five"
        }, {
            id: 7,
            label: "seven"
        }, {
            id: 8,
            label: "eight"
        }];

        // The Ts function uses a TypeScript approach to check the specified
        // field that is given in the last param, if not present does not compile

        let containsTs = common.containsWithTs(data, 5, "id");

        let containsJs = common.containsWithJs(data, 5, function (d) { return d.id; });

        expect(containsTs).toEqual(containsJs);



        containsTs = common.containsWithTs(data, 12, "id");

        containsJs = common.containsWithJs(data, 12, function (d) { return d.id; });

        expect(containsTs).toEqual(containsJs);
    });
});

