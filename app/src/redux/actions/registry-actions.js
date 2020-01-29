export const START_REGISTRY = "START_REGISTRY";
export const SUCCESS_REGISTRY = "SUCCESS_REGISTRY";
export const ERROR_REGISTRY = "ERROR_REGISTRY";
export const REQUEST_REGISTRY = "REQUEST_REGISTRY";
export const CANCEL_REGISTRY = "CANCEL_REGISTRY";
export const RESET_REGISTRY = "RESET_REGISTRY";
export const MAIL_REGISTRY = "MAIL_REGISTRY";
export const MAIL_ADMIN_REGISTRY = "MAIL_ADMIN_REGISTRY";


export const start_registry=(dataRegistry)=>({
  type:START_REGISTRY,
  dataRegistry
})

export const request_registry=()=>({
  type:REQUEST_REGISTRY,
  isPosting:true
})

export const cancel_registry=()=>({
  type:CANCEL_REGISTRY,
  isPosting:false
})

export const success_registry=(message)=>({
  type:SUCCESS_REGISTRY,
  message
})

export const error_registry=(error)=>({
  type:ERROR_REGISTRY,
  error
})

export const reset_registry=()=>({
  type:RESET_REGISTRY,
  message:false,
  error:false,
  mailMessage:false
})

export const mail_registry=(mailMessage)=>({
  type:MAIL_REGISTRY,
  mailMessage
})
