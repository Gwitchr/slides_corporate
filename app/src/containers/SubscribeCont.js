import React from 'react';
import {connect} from 'react-redux';
import {Subscribe} from '../components/forms';
import {start_subscribe} from '../redux/actions/subscribe-actions';

function SubscribeCont(props){
  const {start_subscribe,...rest} = props
  return(
    <Subscribe postDataSubs={start_subscribe} {...rest}/>
  )
}

export default connect(({subscribeReducer})=>({
  ...subscribeReducer
}),{
  start_subscribe
})(SubscribeCont)
