import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {PaymentHandler} from '../../components/pieces/beslides';
import {payment_intent_buy,cancel_buy} from '../../redux/actions/buy-actions';
import {set_selected_product} from '../../redux/actions/products-actions';

function PaymentHandlerCont(props){
  useEffect(()=>{
    if(props.products&&props.order&&!props.selProduct){
      let found = props.products.find((prod)=>prod._id===props.order.product)
      if(found){
        props.set_selected_product(found)
      }
    }
  },[props])
  const {payment_intent_buy,cancel_buy,...rest} = props
  return (
    <PaymentHandler
      startStripeIntent={payment_intent_buy}
      cancelBuy={cancel_buy}
      {...rest}
    />
  )
}

const mapStateToProps=({
  buyReducer,
  ordersReducer:{order,isFetching:orderFetching},
  productsReducer:{selProduct,products}
})=>({
  ...buyReducer,
  orderFetching,
  order,
  selProduct,
  products
})

const mapActionsToProps={
  payment_intent_buy,
  cancel_buy,
  set_selected_product
}

export default connect(mapStateToProps,mapActionsToProps)(PaymentHandlerCont)
