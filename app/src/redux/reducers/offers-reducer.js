import {
  START_OFFER,
  REQUEST_OFFER,
  CANCEL_OFFER,
  SUCCESS_OFFER,
  ERROR_OFFER,
  RESET_OFFER,
  SET_COUPON_OFFER
  // SET_OFFER
} from '../actions/offers-actions';

export const offersReducer=(
  state={
    dataOffer:false,
    isFetching:false,
    couponsToApply:[],
    error:false,
    message:false,
  },
  action
)=>{
  const {
    type,
    dataOffer,
    isFetching,
    couponToAdd,
    couponsToApply,
    message,
    error
  } = action
  switch (type) {
    case START_OFFER:
      return ({...state,dataOffer})
    case REQUEST_OFFER:
      return ({...state,isFetching})
    case CANCEL_OFFER:
      return ({...state,isFetching})
    case SUCCESS_OFFER:
      return ({...state,message})
    case ERROR_OFFER:
      return ({...state,error})
    case SET_COUPON_OFFER:
      let index = state.couponsToApply.find(({_id})=>_id===couponToAdd._id)
      if(!index)return ({...state,couponsToApply:[...state.couponsToApply,couponToAdd]})
      return ({...state})
    case RESET_OFFER:
      return ({...state,error,message,couponsToApply})

    default:
      return ({...state})

  }
}
