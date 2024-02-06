import { AppState } from "../AppState.js";
import { moneyService } from "../services/MoneyService.js";
import { setText } from "../utils/Writer.js";

function _drawMoney() {
    // console.log('drawing coins')
    setText('totalMoney', AppState.money)
}

export class MoneyController {

    constructor() {
        console.log('money controller loaded', AppState.money);
        AppState.on('money', _drawMoney)
    }

    addMoney() {
        console.log('button clicked');
        moneyService.addMoney()
        _drawMoney()
    }
}