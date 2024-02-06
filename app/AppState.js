import { Snack } from './models/SnacksModel.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  money = 0

  snacks = [
    new Snack({ name: 'apple', emoji: '🍎', price: '$.25' }),
    new Snack({ name: 'sandwich', emoji: '🥪', price: '$2.25' }),
    new Snack({ name: 'french fries', emoji: '🍟', price: '$1.25' }),
    new Snack({ name: 'banana', emoji: '🍌', price: '$.25' }),
  ]


  /**@type {import('./models/Example.js').Example[]} */

}

export const AppState = createObservableProxy(new ObservableAppState())