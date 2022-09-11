import { BudgetsController } from "./Controllers/BudgetsController.js";
import { SavesController } from "./Controllers/SavesController.js";



class App {
  budgetsController = new BudgetsController()

  savesController = new SavesController
}

window["app"] = new App();
