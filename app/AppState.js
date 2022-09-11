import { Budget } from "./Models/Budget.js"
<<<<<<< HEAD
import { Save } from "./Models/Save.js"
=======
import { Item } from "./Models/Item.js"
>>>>>>> 10f10edf79e74da793ea25c62b0d86a1daacd120
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value)

  /** @type {import('./Models/Budget').Budget[]} */
  budgets = loadState('budgets', Budget)
<<<<<<< HEAD
  saves = loadState('saves', Save)
=======

  items = loadState('items', Item)
>>>>>>> 10f10edf79e74da793ea25c62b0d86a1daacd120
}


export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
