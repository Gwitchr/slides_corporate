export const START_GET_BESLIDES = "START_GET_BESLIDES"
export const REQUEST_BESLIDES = "REQUEST_BESLIDES"
export const CANCEL_BESLIDES = "CANCEL_BESLIDES"
export const SUCCESS_BESLIDES = "SUCCESS_BESLIDES"
export const ERROR_BESLIDES = "ERROR_BESLIDES"
export const RESET_BESLIDES = "RESET_BESLIDES"
export const SET_ONE_BESLIDES = "SET_ONE_BESLIDES"
export const SET_INFO_BESLIDES = "SET_INFO_BESLIDES"

export const start_get_beslides=(beslides_name)=>({
  type:START_GET_BESLIDES,
  beslides_name
})

export const request_beslides=()=>({
  type:REQUEST_BESLIDES,
  isFetching:true
})

export const cancel_beslides=()=>({
  type:CANCEL_BESLIDES,
  isFetching:false
})

export const success_beslides=(message)=>({
  type:SUCCESS_BESLIDES,
  message
})

export const error_beslides=(error)=>({
  type:ERROR_BESLIDES,
  error
})

export const set_beslides=(beslides)=>({
  type:SET_ONE_BESLIDES,
  beslides
})

export const set_beslides_info=(info_beslides)=>({
  type:SET_INFO_BESLIDES,
  info_beslides
})

export const reset_beslides=()=>({
  type:RESET_BESLIDES,
  message:false,
  error:false
})
