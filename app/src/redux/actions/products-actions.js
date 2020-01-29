export const START_SEND_PRODUCT = 'START_SEND_PRODUCT';
export const START_GET_PRODUCTS = 'START_GET_PRODUCTS';
export const REQUEST_PRODUCT = 'REQUEST_PRODUCT';
export const CANCEL_PRODUCT = 'CANCEL_PRODUCT';
export const SUCCESS_PRODUCT = 'SUCCESS_PRODUCT';
export const ERROR_PRODUCT = 'ERROR_PRODUCT';
export const RESET_PRODUCT = 'RESET_PRODUCT';
export const SET_PRODUCT = 'SET_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';

export const start_get_products=(productQueries)=>({
  type:START_GET_PRODUCTS,
  productQueries
})

export const request_product=()=>({
  type:REQUEST_PRODUCT,
  isFetching:true
})

export const cancel_product=()=>({
  type:CANCEL_PRODUCT,
  isFetching:false
})

export const success_product=(message)=>({
  type:SUCCESS_PRODUCT,
  message
})

export const error_product=(error)=>({
  type:ERROR_PRODUCT,
  error
})

export const set_products=(products)=>({
  type:SET_PRODUCTS,
  products
})

export const set_selected_product=(selProduct)=>({
  type:SET_SELECTED_PRODUCT,
  selProduct
})
