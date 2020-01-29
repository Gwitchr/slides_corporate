export const POST_SUBSCRIBE = 'POST_SUBSCRIBE';
export const CANCEL_SUBSCRIBE = 'CANCEL_SUBSCRIBE';
export const START_SUBSCRIBE = 'START_SUBSCRIBE';
export const SUCCESS_SUBSCRIBE = 'SUCCESS_SUBSCRIBE';
export const ERROR_SUBSCRIBE = 'ERROR_SUBSCRIBE';
export const RESET_SUBSCRIBE = 'RESET_SUBSCRIBE';

export const start_subscribe=(dataSubs)=>({
  type:START_SUBSCRIBE,
  dataSubs
})

export const post_subscribe=()=>({
  type:POST_SUBSCRIBE,
  isPosting:true
})

export const cancel_subscribe=()=>({
  type:CANCEL_SUBSCRIBE,
  isPosting:false
})

export const success_subscribe=(message)=>({
  type:SUCCESS_SUBSCRIBE,
  message
})

export const failure_subscribe=(error)=>({
  type:ERROR_SUBSCRIBE,
  error
})

export const reset_subscribe=()=>({
  type:RESET_SUBSCRIBE,
  message:false,
  error:false
})
