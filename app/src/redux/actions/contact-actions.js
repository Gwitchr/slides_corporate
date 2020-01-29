export const START_LEAD = "START_LEAD";
export const SUCCESS_LEAD = "SUCCESS_LEAD";
export const ERROR_LEAD = "ERROR_LEAD";
export const REQUEST_LEAD = "REQUEST_LEAD";
export const CANCEL_LEAD = "CANCEL_LEAD";
export const RESET_LEAD = "RESET_LEAD";
export const MAIL_LEAD = "MAIL_LEAD";
export const MAIL_ADMIN_LEAD = "MAIL_ADMIN_LEAD";


export const start_lead=(dataLead)=>({
  type:START_LEAD,
  dataLead
})

export const request_lead=()=>({
  type:REQUEST_LEAD,
  isFetching:true
})

export const cancel_lead=()=>({
  type:CANCEL_LEAD,
  isFetching:false
})

export const success_lead=(message)=>({
  type:SUCCESS_LEAD,
  message
})

export const error_lead=(error)=>({
  type:ERROR_LEAD,
  error
})

export const reset_lead=()=>({
  type:RESET_LEAD,
  message:false,
  error:false,
  mailMessage:false
})

export const mail_lead=(mailMessage)=>({
  type:MAIL_LEAD,
  mailMessage
})
