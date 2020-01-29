import React from 'react';
import {ListGroup,ListGroupItem} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {formatNmxn} from '../../../utils';

function CouponApplier({
  startUpdateIntent,
  couponsToApply,
  intent_id,
  order_id
}){
  const startApplyCoupons=()=>{
    const coupons_applied = couponsToApply.map((el)=>el._id)
    startUpdateIntent({
      coupons_applied,
      intent_id,
      order_id
    })
  }
  return (<ListGroup>
    {couponsToApply.map(({
      code,
      referral,
      second_modifier,
      modifier,
      uses
    },i)=><ListGroupItem color="info" key={i}>
        <b>{code}</b><br/>{` que aplica ${referral
          ?uses>0
          ?formatNmxn(second_modifier)
          :formatNmxn(modifier)
          :formatNmxn(modifier)
        }mxn en esta compra`}

    </ListGroupItem>)}
    {
      couponsToApply.length
      ?  <ListGroupItem onClick={startApplyCoupons} color="info" tag="button" action>
          Aplicar <FontAwesomeIcon icon="arrow-right"/>
        </ListGroupItem>
      :null
    }
  </ListGroup>)
}

export default CouponApplier;
