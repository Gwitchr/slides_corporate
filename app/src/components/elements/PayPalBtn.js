import React,{useEffect} from 'react';

function PayPalBtn({purchase,purchaseError,id}){
  useEffect(()=>{
    if(window.paypal){
      window.paypal.Buttons({
        createOrder: function(data, actions) {
          // This function sets up the details of the transaction, including the amount and line item details.
          return actions.order.create({
            // "intent": "sale"
            "application_context": {
                "return_url": "https://www.n12.mx/payment/thankyou",
                "cancel_url": "https://www.n12.mx/payment/cancel"
            },
            "purchase_units": [
                {
                    "amount": {
                        "currency_code": "MXN",
                        "value": "13500.00",
                        "breakdown": {
                          "item_total": {
                                "currency_code": "MXN",
                                "value": "11637.93"
                          },
                          "tax_total": {
                                "currency_code": "MXN",
                                "value": "1862.07"
                          }

                        }
                    }
                }
            ]
          })
        },
        onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
            // alert('Transaction completed by ' + details.payer.name.given_name);
            // Call your server to save the transaction
            const {orderID} = data
            purchase({orderID})
          });
        },
        onError: function (error) {
          purchaseError(error)
        }
      }).render(`#${id}`);
    }
    //eslint-disable-next-line
  },[])
  return(
    <div id={id}/>
  )
}

export default PayPalBtn;
