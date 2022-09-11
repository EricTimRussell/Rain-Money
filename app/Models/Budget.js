import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"
export class Budget {
  /**@param {{name: string, price: number, purchased: boolean, id?: string, type: string}} data */
  constructor(data) {
    this.id = data.id || generateId(),
      this.name = data.name,
      this.price = data.price,
      this.purchased = data.purchased
    this.type = data.type
  }

  get Template() {
    return `
    <div class="col-md-6">
    <div class="card">
      <div class="card-body d-flex px-4 gap-3 justify-content-between">
        <input type="checkbox">
        <h5>${this.type}</h5>
        <h5>${this.name}</h5>
        <h5>"$" of ${this.price}</h5>
      </div>
      <div>
      <h6>${this.List}</h6>
      </div>
      <div>
        <h5 class="px-3">Money Source</h5>
        <form onsubmit="app.SavesController.drawSaveList('${this.id}')">
        <div class="form-floating mb-3 p-3 d-flex">
          <input type="text" class="form-control" name="source">
          <label for="source"></label>
          <input type="text" class="form-control" name="source money">
          <label for="source money"></label>
          <button class="btn" type="submit"><i class="mdi mdi-plus btn-primary"></i></button>
        </div>
      </div>
    </div>
    `


  }
  get List() {
    let template = ''
    let saves = appState.saves.filter(s => s.budgetId == this.id)
    saves.forEach(s => template += s.Template)
    return template
  }






}