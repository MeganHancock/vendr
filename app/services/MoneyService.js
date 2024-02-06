import { AppState } from "../AppState.js";

class MoneyService {
    addMoney() {
        AppState.money += .25
        console.log('adding Money in the service', AppState.money);
    }

}

export const moneyService = new MoneyService()