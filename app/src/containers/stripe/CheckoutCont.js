import React from 'react';
import {connect} from 'react-redux';
import {Checkout} from '../../components/pieces/Stripe'
import {payment_intent_buy,cancel_buy,intent_confirm_buy,error_buy,set_successful_buy} from '../../redux/actions/buy-actions';
import {add_toast} from '../../redux/actions/toasts-actions';


function CheckoutCont(props){
  const {
    error_buy,
    set_successful_buy,
    add_toast,
    intent_confirm_buy,cancel_buy,payment_intent_buy,...rest} = props
  return(
    <Checkout
      startPayIntent={payment_intent_buy}
      startIntentConfirm={intent_confirm_buy}
      setSuccessfulBuy={set_successful_buy}
      cancelBuy={cancel_buy}
      errorBuy={error_buy}
      addToast={add_toast}
      {...rest}
    />
  )
}
const mapStateToProps=({
  buyReducer,
  ordersReducer:{
    order:{_id,updated_amount}
  },
  productsReducer:{
    selProduct
  }
})=>({
  ...buyReducer,
  order_id:_id,
  updated_amount,
  selProduct
})

const mapActionsToProps={
  payment_intent_buy,
  cancel_buy,
  intent_confirm_buy,
  error_buy,
  add_toast,
  set_successful_buy
}

export default connect(mapStateToProps,mapActionsToProps)(CheckoutCont)
