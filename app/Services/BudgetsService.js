import { appState } from "../AppState.js"
import { Budget } from "../Models/Budget.js"
import { BudgetsController } from "../Controllers/BudgetsController.js"
import { saveState } from "../Utils/Store.js"


class BudgetsService {




  createBudget(formData) {
    let budget = new Budget(formData)
    appState.budgets = [budget, ...appState.budgets]
    console.log(appState.budgets);
<<<<<<< HEAD
    saveState('saves', appState.budgets)

=======
    // NOTE add save state here 
    saveState('budgets', appState.budgets)
>>>>>>> 10f10edf79e74da793ea25c62b0d86a1daacd120
  }







}

export const budgetService = new BudgetsService()
