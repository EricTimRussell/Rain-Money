import { itemsService } from "../Services/ItemsServices.js";
import { getFormData } from "../Utils/FormHandler.js";

export class ItemsController {

  constructor() {



  }

  createItem(budgetId) {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      let form = window.event.target
      let formData = getFormData(form)
      // @ts-ignore
      formData.budgetId = budgetId
      console.log('does this look okay?', formData);
      itemsService.createItem(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[CREATE_ITEM]', error);
    }
  }

  removeItem(id) {
    // console.log(id);
    if (window.confirm('Do you want to remove this item?')) {
      itemsService.removeItem(id)
    }
  }
}