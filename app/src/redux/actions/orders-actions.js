export const START_ORDER = 'START_ORDER';
export const REQUEST_ORDER = 'REQUEST_ORDER';
export const CANCEL_ORDER = 'CANCEL_ORDER';
export const SUCCESS_ORDER = 'SUCCESS_ORDER';
export const ERROR_ORDER = 'ERROR_ORDER';
export const RESET_ORDER = 'RESET_ORDER';
export const SET_ORDER = 'SET_ORDER';

export const start_order=(dataOrder)=>({
  type:START_ORDER,
  dataOrder
})

export const request_order=()=>({
  type:REQUEST_ORDER,
  isFetching:true
})

export const cancel_order=()=>({
  type:CANCEL_ORDER,
  isFetching:false
})

export const success_order=(message)=>({
  type:SUCCESS_ORDER,
  message
})

export const error_order=(error)=>({
  type:ERROR_ORDER,
  error
})

export const reset_order=()=>({
  type: RESET_ORDER,
  error:false,
  message:false
})

export const set_order=(order)=>({
  type:SET_ORDER,
  order
})
