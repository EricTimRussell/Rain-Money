import { generateId } from "../Utils/generateId.js"
import { appState } from "../AppState.js"


export class Budget {
  /**@param {{name: string, price: number, purchased: boolean, type: string, id?: string}} data */
  constructor(data) {
    this.id = data.id || generateId(),
      this.name = data.name,
      this.price = data.price,
      this.purchased = data.purchased
    this.type = data.type
  }

  get Template() {
    return /*html*/ `
   <div class="col-md-4 col-lg-3 mb-3">
      <div class="card">
        <div class="card-body">
          <h5 class="text-uppercase">
            ${this.name} of ${this.price}
          </h5>
          <p>
          <!--TODO make this function work -->
            <strong>$ ${this.purchased}</strong>
          </p>
          <!--- TODO make add source here --->
          <p></p>
         <ul class="list-group elevation-2 mb-3">
          <!--REVIEW do this tomorrow-->
          ${this.ItemTemplates}
        </ul>

<form class="bg-info rounded p-1" onsubmit="app.itemsController.createBudget('${this.id}')'">
          <div class="d-flex w-100 ">
            <div class="flex-grow-1">
              <input class="form-control square-right" type="text" required minlength="2" name="name" placeholder="Name..."/>
              <label for="name" class="visually-hidden">Name</label>
            </div>
            <div>
              <input class="form-control  square" type="number" required min="0" name="price" placeholder="0.00"/>
              <label for="price" class="visually-hidden">Price</label>
            </div>
            <button type="submit" class="btn btn-info square-left" title="Add Item">
              <b><i class="mdi mdi-plus text-light"></i></b>
            </button>
          </div>
            </div>
      </div>
    </div>
        </form>
      
    `


  }

  get ItemTemplates() {
    let template = ''
    this.Items.forEach(item => template += item.Template)
    return template
  }

  get Items() {
    let items = appState.items.filter(item => item.budgetId == this.id)
    return items
  }



}