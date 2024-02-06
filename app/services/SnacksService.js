import { AppState } from "../AppState.js";

class SnacksService {
    buySnack(snackName) {
        const foundSnack = AppState.snacks.find(snack => snack.name == snackName)
        console.log('snack service snackName', snackName)
    }
}

export const snacksService = new SnacksService()