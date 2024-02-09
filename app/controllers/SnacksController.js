import { AppState } from "../AppState.js"
import { Snack } from "../models/SnacksModel.js"
import { setHTML, setText } from "../utils/Writer.js"
import { snacksService } from "../services/SnacksService.js"

function _drawSnacks() {
    const snacks = AppState.snacks
    let htmlString = ''

    snacks.forEach(snack => htmlString += snack.snackDisplayHTMLTemplate)

    setHTML('snacksDisplay', htmlString)
}

function _drawPurchasedSnacks() {
    const purchasedSnacks = AppState.purchasedSnacks
    let htmlString = ''

    purchasedSnacks.forEach(snack => htmlString += snack.snackDisplayHTMLTemplate)

    setText('purchasedSnacksDisplay', purchasedSnacks)
}


export class SnacksController {
    constructor() {
        console.log('new snacks controller')
        _drawSnacks()
        AppState.on('mySnack', _drawPurchasedSnacks)
    }

    buySnack(snackName) {
        console.log('buying this snack:', snackName);
        snacksService.buySnack(snackName)

    }

}