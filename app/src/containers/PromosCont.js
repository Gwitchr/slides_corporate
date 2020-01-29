import React from 'react';
import {connect} from 'react-redux';
import {PromoCoupons} from '../components/forms';
import {start_offer} from '../redux/actions/offers-actions'
import {add_toast} from '../redux/actions/toasts-actions';

function PromosCont(props){
  const {add_toast,start_offer,...rest} = props
 return(
   <PromoCoupons
    startOffer={start_offer}
    setToast={add_toast}
    closePromo={props.closePromo}
   {...rest}/>
 )
}

const mapStateToProps=({offersReducer})=>({
  ...offersReducer
})

const mapActionsToProps={
  start_offer,
  add_toast
}

export default connect(mapStateToProps,mapActionsToProps)(PromosCont)
