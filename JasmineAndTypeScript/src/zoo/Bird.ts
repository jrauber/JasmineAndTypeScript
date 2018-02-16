import { Animal } from "./Base/Animal";

export class Bird extends Animal {

    move(): string {

        let message = `the bird "${this.name}" flaps the wings`;

        console.log(message);

        return message;
    }

    makeNoise(noise: string): string {

        let message = `the bird "${this.name}" tweeps: ${noise}`;

        console.log(message);

        return message;
    }
}

