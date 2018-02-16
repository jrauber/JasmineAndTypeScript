import * as Toons from '../../src/zoo/Toons';

describe("zoo", function () {
    it("Jerry flees from Butch and meeows", function () {

        let jerry = new Toons.Cat("Jerry");

        let fleeResult = jerry.fleeFromPredator("Butch hates me!");

        let lastLine = fleeResult.split("\n")[fleeResult.split("\n").length - 1];

        expect(lastLine).toEqual("the cat \"Jerry\" meeows: Butch hates me! .. again .. (escaped)");
    });
});

describe("zoo", function () {
    it("Tweety flees from Sylvester and tweeps", function () {

        let tweety = new Toons.Bird("Tweety");

        let fleeResult = tweety.fleeFromPredator("Sylvester will eat me!");

        let lastLine = fleeResult.split("\n")[fleeResult.split("\n").length - 1];

        expect(lastLine).toEqual("the bird \"Tweety\" tweeps: Sylvester will eat me! .. again .. (escaped)");
    });
});


