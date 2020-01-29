export const START_BUY = "START_BUY";
export const REQUEST_BUY = "REQUEST_BUY";
export const CANCEL_BUY = "CANCEL_BUY";
export const SESSION_BUY = "SESSION_BUY";
export const SUCCESS_BUY = "SUCCESS_BUY";
export const ERROR_BUY = "ERROR_BUY";
export const RESET_BUY = "RESET_BUY";
export const SET_SESSION_BUY = "SET_SESSION_BUY";
export const SET_INTENT_BUY = "SET_INTENT_BUY";
export const SET_INSTALLMENT_OPTIONS_BUY = "SET_INSTALLMENT_OPTIONS_BUY";
export const PAYMENT_INTENT_BUY = "PAYMENT_INTENT_BUY";
export const SET_SUCCESSFUL_BUY = "SET_SUCCESSFUL_BUY";
export const INTENT_CONFIRM_BUY = "INTENT_CONFIRM_BUY";
export const SET_UPDATED_INTENT = "SET_UPDATED_INTENT";
export const CONFIRM_STRIPEJS_BUY = "CONFIRM_STRIPEJS_BUY";
export const START_UPDATE_INTENT_BUY = "START_UPDATE_INTENT_BUY";

export const start_buy =(dataBuy)=>({
  type:START_BUY,
  dataBuy
})

export const session_buy =(order_id)=>({
  type:SESSION_BUY,
  order_id
})

export const payment_intent_buy=(intentData)=>({
  type:PAYMENT_INTENT_BUY,
  intentData
})

export const payment_update_buy=(updateData)=>({
  type:START_UPDATE_INTENT_BUY,
  updateData
})

export const confirm_stripejs_buy=(frontCheck)=>({
  type:CONFIRM_STRIPEJS_BUY,
  frontCheck
})

export const intent_confirm_buy=(confirmData)=>({
  type:INTENT_CONFIRM_BUY,
  confirmData
})

export const set_session=(session)=>({
  type:SET_SESSION_BUY,
  session
})

export const set_successful_buy=()=>({
  type:SET_SUCCESSFUL_BUY,
  success_payment:true
})

export const set_installment_options=(installment_options)=>({
  type:SET_INSTALLMENT_OPTIONS_BUY,
  installment_options
})

export const set_intent=(intent_id)=>({
  type:SET_INTENT_BUY,
  intent_id
})

export const set_updated_intent=(intent)=>({
  type:SET_UPDATED_INTENT,
  intent
})

export const request_buy=()=>({
  type:REQUEST_BUY,
  isFetching:true
})

export const cancel_buy =()=>({
  type:CANCEL_BUY,
  isFetching:false
})

export const success_buy =(message)=>({
  type:SUCCESS_BUY,
  message
})

export const error_buy =(error)=>({
  type:ERROR_BUY,
  error
})

export const reset_buy=()=>({
  type:RESET_BUY,
  message:false,
  error:false
})
