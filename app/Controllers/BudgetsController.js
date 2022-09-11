import { appState } from "../AppState.js"
import { Budget } from "../Models/Budget.js"
import { budgetService } from "../Services/BudgetsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"


function _drawBudgets() {
  let template = ''
  appState.budgets.forEach(budget => template += budget.Template)
  setHTML('budget', template)

}



export class BudgetsController {

  constructor() {
    _drawBudgets()
    appState.on('budgets', _drawBudgets)
    appState.on('saves', _drawBudgets)
  }


  showBudgets() {
    _drawBudgets()
  }


  createBudget() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      // @ts-ignore
      let formData = getFormData(form)
      budgetService.createBudget(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[CREATE_BUDGET]', error);
    }
  }





}