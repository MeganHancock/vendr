import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

function _drawSnacks() {
    const snacks = AppState.snacks
    let htmlString = ''

    snacks.forEach(snack => htmlString += snack.snackDisplayHTMLTemplate)

    setHTML('snacksDisplay', htmlString)
}


export class SnacksController {
    constructor() {
        console.log('new snacks controller')
        _drawSnacks()
    }

    buySnack(snackName) {
        console.log('buying this snack:', snackName);

    }

}