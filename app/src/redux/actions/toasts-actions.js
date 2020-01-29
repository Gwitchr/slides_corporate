import uuid from 'uuid';
export const REMOVE_TOAST = "REMOVE_TOAST";
export const ADD_TOAST = "ADD_TOAST";

export const add_toast =(toast)=>({
  type:ADD_TOAST,
  toast:{...toast,idToast:uuid()}
})

export const remove_toast=(idToast)=>({
  type:REMOVE_TOAST,
  idToast  
})
