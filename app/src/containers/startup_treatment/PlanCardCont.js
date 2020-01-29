import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {PlanCard} from '../../components/elements/startup_treatment'
import {start_buy,error_buy,session_buy} from '../../redux/actions/buy-actions'

function PurchaseCont(props){
  useEffect(()=>{
    if(window.Stripe){
      try{
        const stripe = window.Stripe(process.env.STRIPE_KEY)
        if(props.session){
          stripe.redirectToCheckout({
            // Make the id field from the Checkout Session creation API response
            // available to this file, so you can provide it as parameter here
            // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
            sessionId:props.session
          }).then(function (result) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
          });
        }
      } catch(error){
        console.warn(error)
      }
      console.log('session',props.session)
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
    }
  },[props.session])
  const {start_buy,session_buy,error_buy,...rest} = props
  return(
    <PlanCard
      purchaseError={error_buy}
      session_buy={session_buy}
      purchase={start_buy}
      {...rest}/>
  )
}

export default connect(({buyReducer})=>({
  ...buyReducer
}),{
  start_buy,
  error_buy,
  session_buy
})(PurchaseCont)
