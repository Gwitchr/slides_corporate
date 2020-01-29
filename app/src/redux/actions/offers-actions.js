export const START_OFFER = "START_OFFER";
export const REQUEST_OFFER = "REQUEST_OFFER";
export const CANCEL_OFFER = "CANCEL_OFFER";
export const SUCCESS_OFFER = "SUCCESS_OFFER";
export const ERROR_OFFER = "ERROR_OFFER";
export const RESET_OFFER = "RESET_OFFER";
export const SET_OFFER = "SET_OFFER";
export const VERIFY_COUPON_OFFER = "VERIFY_COUPON_OFFER";
export const SET_COUPON_OFFER = "SET_COUPON_OFFER";


export const start_offer=(dataOffer)=>({
  type:START_OFFER,
  dataOffer
})

export const verify_coupon_offer=(couponURL)=>({
  type:VERIFY_COUPON_OFFER,
  couponURL
})

export const set_coupon_offer=(couponToAdd)=>({
  type:SET_COUPON_OFFER,
  couponToAdd
})

export const request_offer=()=>({
  type:REQUEST_OFFER,
  isFetching:true
})

export const cancel_offer=()=>({
  type:CANCEL_OFFER,
  isFetching:false
})

export const success_offer=(message)=>({
  type:SUCCESS_OFFER,
  message
})

export const error_offer=(error)=>({
  type:ERROR_OFFER,
  error
})

export const reset_offer=()=>({
  type:RESET_OFFER,
  error:false,
  message:false,
  couponsToApply:[]
})
