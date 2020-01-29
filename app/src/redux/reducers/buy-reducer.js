import {
  REQUEST_BUY,
  START_BUY,
  SUCCESS_BUY,
  ERROR_BUY,
  CANCEL_BUY,
  RESET_BUY,
  SET_SESSION_BUY,
  SET_INTENT_BUY,
  SET_INSTALLMENT_OPTIONS_BUY,
  SET_SUCCESSFUL_BUY,
  SET_UPDATED_INTENT,
  CONFIRM_STRIPEJS_BUY
} from '../actions/buy-actions'

export const buyReducer=(
  state={
    dataBuy:{},
    isFetching:false,
    message:false,
    error:false,
    session:false,
    intent_id:false,
    intent:false,
    installment_options:[],
    frontCheck:false,
    success_payment:false
  },
  action
)=>{
  const {
    type,
    dataBuy,
    isFetching,
    message,
    error,
    session,
    frontCheck,
    intent_id,
    intent,
    installment_options,
    success_payment
  } = action
  switch (type) {
    case REQUEST_BUY:
      return({...state,isFetching})
    case CANCEL_BUY:
      return({...state,isFetching})
    case SUCCESS_BUY:
      return({...state,message})
    case SET_SESSION_BUY:
      return({...state,session})
    case SET_INTENT_BUY:
      return({...state,intent_id})
    case SET_UPDATED_INTENT:
      return({...state,intent})
    case CONFIRM_STRIPEJS_BUY:
      return({...state,frontCheck})
    case SET_INSTALLMENT_OPTIONS_BUY:
      return({...state,installment_options})
    case ERROR_BUY:
      return({...state,error})
    case START_BUY:
      return({...state,dataBuy})
    case SET_SUCCESSFUL_BUY:
      return({...state,success_payment})
    case RESET_BUY:
      return({...state,isFetching,error,message})

    default:
      return({...state})

  }

}
