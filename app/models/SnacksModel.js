
export class Snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.emoji = data.emoji
    }

    get snackDisplayHTMLTemplate() {
        return /*html*/ `
    <div class="col-3 card m-2 p-2">
            <p class="display-2">${this.emoji}</p>
            <p class="fs-2">${this.name}</p>
            <p class="fs-3">$${this.price}</p>
            <button type="button" id="buySnackButton" onclick="app.SnacksController.buySnack('${this.name}')">BUY</button>
        </div> `
    }

    get mySnacksDisplayHTMLTemplate() {
        return /*html*/`
    <p class="display-2">${this.emoji}</p> `
    }
}