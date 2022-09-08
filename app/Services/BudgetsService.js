import { appState } from "../AppState.js"
import { Budget } from "../Models/Budget.js"
import { BudgetsController } from "../Controllers/BudgetsController.js"


class BudgetsService {




  createBudget(formData) {
    let budget = new Budget(formData)
    appState.budgets = [budget, ...appState.budgets]
    console.log(appState.budgets);
    // NOTE add save state here 

  }







}

export const budgetService = new BudgetsService()
