import React from 'react';
import {CardElement} from 'react-stripe-elements';
import {Label} from 'reactstrap';

function CardDataCollector(){
  const style = {
  base: {
    color: "#32325d",
    fontFamily: 'nunito, Helvetica, sans-serif',
    fontSmoothing: "antialiased",
    fontSize: "16px",
    "::placeholder": {
      color: "#aab7c4"
    }
  },
  invalid: {
    color: "#fa755a",
    iconColor: "#fa755a"
  }
};
  return(
    <>
      <Label className="">
       Detalles de la tarjeta
      </Label>
      <CardElement className="stripe_card_info" style={style} />
    </>

  )
}

export default CardDataCollector
