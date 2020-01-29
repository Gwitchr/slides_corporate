import React from 'react';
import {connect} from 'react-redux';
import {CouponApplier} from '../../components/forms/payment';
import {payment_update_buy} from '../../redux/actions/buy-actions';
import {reset_offer} from '../../redux/actions/offers-actions'
// TO-DO payment updater

function CouponApplierCont(props){
  const {reset_offer,payment_update_buy,...rest} = props
  const startUpdateIntent=(data)=>{
    payment_update_buy(data)
    reset_offer()
  }
  return(
    <CouponApplier
      startUpdateIntent={startUpdateIntent}
    {...rest}/>
  )
}

const mapStateToProps=({
  offersReducer,
  buyReducer:{intent_id},
  ordersReducer:{order}
})=>({
  ...offersReducer,
  intent_id,
  order_id:order._id
})

const mapActionsToProps={
  payment_update_buy,
  reset_offer
}

export default connect(mapStateToProps,mapActionsToProps)(CouponApplierCont)
