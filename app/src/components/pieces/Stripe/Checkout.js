import React from 'react';
import {StripeProvider,Elements} from 'react-stripe-elements';
import {CheckoutForm} from '../../forms/Stripe';
import '../../../style/stripe_elements.css'

function Checkout(props){
  const {cancelBuy,startIntentConfirm,startPayIntent,...rest} = props
  return(
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
      <Elements locale="es">
        <CheckoutForm
          startPayIntent={startPayIntent}
          startIntentConfirm={startIntentConfirm}
          cancelBuy={cancelBuy}
          {...rest} />
      </Elements>
    </StripeProvider>
  )
}

export default Checkout
