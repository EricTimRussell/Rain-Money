import { savesService } from "../Services/SavesService.js";
import { getFormData } from "../Utils/FormHandler.js";


export class SavesController {
  constructor() {
    console.log('hello');
  }


  drawSaveList(budgetId) {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let newList = getFormData(form)
      // @ts-ignore
      newList.budgetId = budgetId
      savesService.drawSaveList(newList)
    } catch (error) {
      console.error(error);
    }
  }


}
