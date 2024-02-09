import { Snack } from './models/SnacksModel.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  money = 0

  snacks = [
    new Snack({ name: 'apple', emoji: '🍎', price: .25 }),
    new Snack({ name: 'sandwich', emoji: '🥪', price: 2.25 }),
    new Snack({ name: 'fries', emoji: '🍟', price: 1.25 }),
    new Snack({ name: 'banana', emoji: '🍌', price: .25 }),
    new Snack({ name: 'cookie', emoji: '🍪', price: 1.00 }),
    new Snack({ name: 'pizza', emoji: '🍕', price: 2.00 }),
  ]

  purchasedSnacks = []

  // /**@type {snacks[]} */
}

export const AppState = createObservableProxy(new ObservableAppState())