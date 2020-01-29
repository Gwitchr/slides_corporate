import React from 'react';
import {connect} from 'react-redux';
import {OrderForm} from '../../components/forms/startup_treatment'
import {start_order,cancel_order} from '../../redux/actions/orders-actions.js'
import {add_toast} from '../../redux/actions/toasts-actions';

function OrderFormCont(props){
  const {add_toast,start_order,cancel_order,...rest} = props
  return(
    <OrderForm
      setToast={add_toast}
      cancelService={cancel_order}
      startOrder={start_order}
      {...rest}/>
  )
}

const mapStateToProps=({ordersReducer})=>({...ordersReducer})
const mapActionsToProps={
  start_order,
  cancel_order,
  add_toast
}


export default connect(mapStateToProps,mapActionsToProps)(OrderFormCont)
