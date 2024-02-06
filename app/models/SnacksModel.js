import { AppState } from "../AppState.js";

export class Snack {
    constructor(data) {
        this.nameame = data.name
        this.price = data.price
        this.emoji = data.emoji
    }
}