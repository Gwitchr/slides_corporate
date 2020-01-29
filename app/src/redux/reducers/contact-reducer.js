import {
  START_LEAD,
  SUCCESS_LEAD,
  ERROR_LEAD,
  REQUEST_LEAD,
  CANCEL_LEAD,
  RESET_LEAD,
  MAIL_LEAD,
} from '../actions/contact-actions';

export const contactReducer=(
  state={
    dataLead:{},
    isFetching:false,
    message:false,
    error:false,
    mailMessage:false,
  },action
)=>{
  const {
    type,
    dataLead,
    isFetching,
    message,
    error,
    mailMessage
  } = action
  switch(type){
    case START_LEAD:
      return ({...state,dataLead})
    case REQUEST_LEAD:
      return ({...state,isFetching})
    case CANCEL_LEAD:
      return ({...state,isFetching})
    case SUCCESS_LEAD:
      return ({...state,message})
    case ERROR_LEAD:
      return ({...state,error})
    case MAIL_LEAD:
      return ({...state,mailMessage})
    case RESET_LEAD:
      return ({...state,error,message,mailMessage})
    default:
      return ({...state})
  }

}
