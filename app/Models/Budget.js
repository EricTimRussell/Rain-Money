import { generateId } from "../Utils/generateId.js"
import { appState } from "../AppState.js"
export class Budget {
  /**@param {{name: string, price: number, purchased: boolean, id?: string}} data */
  constructor(data) {
    this.id = data.id || generateId(),
      this.name = data.name,
      this.price = data.price,
      this.purchased = data.purchased
  }

  get Template() {
    return `
    <div class="col-md-4 d-flex">
    <div class="card">
      <div class="card-body">
        <input type="checkbox">
        <h5>What your saving up for${this.name}</h5>
        <h5>how much money to save up${this.price}</h5>
      </div>
    </div>
  </div>
    `


  }




}