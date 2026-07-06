export class Commentator {
    broadcast(message) {
        throw new Error("broadcast() must be implemented");
    }
}
export class EnglishCommentor extends Commentator {
    broadcast(message) {
        console.log(`Message: ${message}`);
    }
}
