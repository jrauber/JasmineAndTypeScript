import { IMove } from "./IMove";
import { IMakeNoise } from "./IMakeNoise";
import { IFleeFromPredator } from "./IFleeFromPredator";

export abstract class Animal implements IMove, IMakeNoise, IFleeFromPredator {

    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    abstract move(): string

    abstract makeNoise(noise: string): string

    public fleeFromPredator(noise: string): string {

        let result: string = "";

        result += this.move() + "\n";
        result += this.makeNoise(noise) + "\n";
        result += this.move() + "\n";
        result += this.makeNoise(`${noise} .. again`) + "\n";
        result += this.move() + "\n";
        result += this.makeNoise(`${noise} .. again .. (escaped)`);

        return result;
    }
}



