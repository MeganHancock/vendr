import { AppState } from "../AppState.js";

class SnacksService {
    buySnack(snackName) {
        const foundSnack = AppState.snacks.find(snack => snack.name == snackName)
        // console.log('snack service snackName', snackName)
        if (AppState.money < foundSnack.price) {
            window.alert('add more money')
            return
        }
        AppState.money -= foundSnack.price
        AppState.mySnacks.push(foundSnack)
    }
}

export const snacksService = new SnacksService()