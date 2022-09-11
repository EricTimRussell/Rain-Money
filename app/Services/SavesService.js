import { appState } from "../AppState.js"
import { Save } from "../Models/Save.js"
import { saveState } from "../Utils/Store.js"




class SaveService {
  drawSaveList(newList) {
    let list = new Save(newList)
    appState.saves = [list, ...appState.saves]
    saveState('saves', appState.saves)
  }





}


export const savesService = new SaveService