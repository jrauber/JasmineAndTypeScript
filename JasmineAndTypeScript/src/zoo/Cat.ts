import { Animal } from "./Base/Animal";

export class Cat extends Animal {

    constructor(name: string) {
        super(name);
    }

    move(): string {

        let message = `the cat "${this.name}" jumps away`;

        console.log(message);

        return message;
    }

    makeNoise(noise: string): string {

        let message = `the cat "${this.name}" meeows: ${noise}`;

        console.log(message);

        return message;
    }
}

