import {
  START_ORDER,
  REQUEST_ORDER,
  CANCEL_ORDER,
  SUCCESS_ORDER,
  ERROR_ORDER,
  RESET_ORDER,
  SET_ORDER
} from '../actions/orders-actions';

export const ordersReducer=(
  state={
    order: false,
    isFetching:false,
    error:false,
    message:false,
    dataOrder:false,
  },
  action
)=>{
  const {
    type,
    order,
    isFetching,
    dataOrder,
    error,
    message
  } = action
  switch (type) {
    case START_ORDER:
      return({...state,dataOrder})
    case REQUEST_ORDER:
      return({...state,isFetching})
    case CANCEL_ORDER:
      return({...state,isFetching})
    case SUCCESS_ORDER:
      return({...state,message})
    case ERROR_ORDER:
      return({...state,error})
    case RESET_ORDER:
      return({...state,error,message})
    case SET_ORDER:
      return({...state,order})


    default:
      return({...state})

  }
}
