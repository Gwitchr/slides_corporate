import {
  REQUEST_PRODUCT,
  CANCEL_PRODUCT,
  SUCCESS_PRODUCT,
  ERROR_PRODUCT,
  RESET_PRODUCT,
  SET_PRODUCTS,
  SET_SELECTED_PRODUCT
} from '../actions/products-actions';

export const productsReducer=(
  state={
    products:[],
    isFetching:false,
    message:false,
    error:false,
    selProduct:false
  },
  action)=>{
  const {
    type,
    products,
    selProduct,
    isFetching,
    message,
    error
  } = action
  switch (type) {
    case REQUEST_PRODUCT:
      return ({...state,isFetching})
    case CANCEL_PRODUCT:
      return ({...state,isFetching})
    case SUCCESS_PRODUCT:
      return ({...state,message})
    case ERROR_PRODUCT:
      return ({...state,error})
    case RESET_PRODUCT:
      return ({...state,error,message})
    case SET_PRODUCTS:
      return ({...state,products})
    case SET_SELECTED_PRODUCT:
      return ({...state,selProduct})

    default:
      return ({...state})

  }
}
