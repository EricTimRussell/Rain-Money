import { appState } from "../AppState.js"
import { Budget } from "../Models/Budget.js"
import { BudgetsController } from "../Controllers/BudgetsController.js"
import { saveState } from "../Utils/Store.js"


class BudgetsService {




  createBudget(formData) {
    let budget = new Budget(formData)
    appState.budgets = [budget, ...appState.budgets]
    console.log(appState.budgets);
    saveState('saves', appState.budgets)

  }







}

export const budgetService = new BudgetsService()
