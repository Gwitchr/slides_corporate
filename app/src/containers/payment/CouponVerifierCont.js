import 'url-search-params-polyfill';
import React from 'react';
import {connect} from 'react-redux';
import {CouponVerifier} from '../../components/forms/payment';
import {verify_coupon_offer} from '../../redux/actions/offers-actions';
import {add_toast} from '../../redux/actions/toasts-actions';

function CouponVerifierCont(props){
  const startCouponVerif=(cupon)=>{
    let queryURL = new URLSearchParams()
    queryURL.append('coupon',cupon)
    queryURL.append('product_id',props.selProduct._id)
    props.verify_coupon_offer(`?${queryURL.toString()}`)
  }
  const {add_toast,...rest} = props
  return(
    <CouponVerifier
      setToast={add_toast}
      startCouponVerif={startCouponVerif}
      {...rest}
    />
  )
}

const mapStateToProps=({
  offersReducer,
  productsReducer:{selProduct}

})=>({
  ...offersReducer,
  selProduct
})
const mapActionsToProps={
  add_toast,
  verify_coupon_offer,
}

export default connect(mapStateToProps,mapActionsToProps)(CouponVerifierCont)
