import {
  POST_SUBSCRIBE,
  CANCEL_SUBSCRIBE,
  START_SUBSCRIBE,
  SUCCESS_SUBSCRIBE,
  ERROR_SUBSCRIBE,
  RESET_SUBSCRIBE
} from '../actions/subscribe-actions';

export const subscribeReducer=(
  state={
    isPosting:false,
    message:false,
    error:false,
    subscriber:''
  },action
)=>{
  const {
    type,
    isPosting,
    message,
    error,
    subscriber
  } = action
  switch(type){
    case POST_SUBSCRIBE:
      return ({...state,isPosting})
    case CANCEL_SUBSCRIBE:
      return ({...state,isPosting})
    case SUCCESS_SUBSCRIBE:
      return ({...state,message})
    case ERROR_SUBSCRIBE:
      return ({...state,error})
    case RESET_SUBSCRIBE:
      return ({...state,message,error})
    case START_SUBSCRIBE:
      return ({...state,subscriber})
    default:
      return state
  }
}
