import { generateId } from "../Utils/generateId.js";


export class Save {
  constructor(data) {
    this.id = data.id || generateId()
    this.source = data.source
    this.sourceMoney = data.sourceMoney
    this.budgetId = data.budgetId
  }


  get Template() {
    return `
    <div class="d-flex justify-content-between align-items-baseline">
    <p class="px-2 mb-1">${this.source} ${this.sourceMoney}</p>
  `
  }





}