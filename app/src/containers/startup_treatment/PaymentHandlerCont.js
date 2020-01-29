import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {PaymentHandler} from '../../components/pieces/startup_treatment';
import {payment_intent_buy,cancel_buy} from '../../redux/actions/buy-actions'
import {set_selected_product} from '../../redux/actions/products-actions'

function PaymentHandlerCont(props){
  useEffect(()=>{
    // if(window.Stripe){
    //   try{
    //     const stripe = window.Stripe(process.env.REACT_APP_STRIPE_KEY)
    //     if(props.session&&!props.isFetching){
    //       stripe.redirectToCheckout({
    //         // Make the id field from the Checkout Session creation API response
    //         // available to this file, so you can provide it as parameter here
    //         // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
    //         sessionId:props.session
    //       }).then(function (result) {
    //         // If `redirectToCheckout` fails due to a browser or network
    //         // error, display the localized error message to your customer
    //         // using `result.error.message`.
    //       });
    //     }
    //   } catch(error){
    //     props.error_buy(error)
    //     console.warn(error)
    //   }
      // stripe.redirectToCheckout({
      //   // Make the id field from the Checkout Session creation API response
      //   // available to this file, so you can provide it as parameter here
      //   // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      //   sessionId: '{{CHECKOUT_SESSION_ID}}'
      // }).then(function (result) {
      //   // If `redirectToCheckout` fails due to a browser or network
      //   // error, display the localized error message to your customer
      //   // using `result.error.message`.
      // });
    // }
    if(props.products&&props.order){
      let found = props.products.find((prod)=>prod._id===props.order.product)
      if(found){
        props.set_selected_product(found)
      }
    }
  },[props])
  const {payment_intent_buy,cancel_buy,...rest} = props
  return(
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
