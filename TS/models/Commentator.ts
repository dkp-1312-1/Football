export abstract class Commentator {
    public abstract broadcast(message: string): void;
}

export class EnglishCommentor extends Commentator {
    public broadcast(message: string): void {
        console.log(`Message: ${message}`);
    }
}
