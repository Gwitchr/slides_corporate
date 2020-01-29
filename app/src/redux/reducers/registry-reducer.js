import {
  START_REGISTRY,
  SUCCESS_REGISTRY,
  ERROR_REGISTRY,
  REQUEST_REGISTRY,
  CANCEL_REGISTRY,
  RESET_REGISTRY,
  MAIL_REGISTRY,
} from '../actions/registry-actions';

export const registryReducer=(
  state={
    dataRegistry:{},
    isPosting:false,
    message:false,
    error:false,
    mailMessage:false,
  },action
)=>{
  const {
    type,
    dataRegistry,
    isPosting,
    message,
    error,
    mailMessage
  } = action
  switch(type){
    case START_REGISTRY:
      return ({...state,dataRegistry})
    case REQUEST_REGISTRY:
      return ({...state,isPosting})
    case CANCEL_REGISTRY:
      return ({...state,isPosting})
    case SUCCESS_REGISTRY:
      return ({...state,message})
    case ERROR_REGISTRY:
      return ({...state,error})
    case MAIL_REGISTRY:
      return ({...state,mailMessage})
    case RESET_REGISTRY:
      return ({...state,error,message,mailMessage})
    default:
      return ({...state})
  }

}
