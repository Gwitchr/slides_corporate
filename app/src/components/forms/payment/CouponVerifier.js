import React,{useState} from 'react';
import {
  Label,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Progress
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {LOCAL_MESSAGES} from '../../../constants'

function CouponVerifier(props){
  let [coupon,setCoupon] = useState('')
  const getValue=(e)=>{
    setCoupon(e.target.value)
  }
  const setVerify=(e)=>{
    // e.stopPropagation()
    // e.preventDefault()
    if(coupon!==''){
      props.startCouponVerif(coupon)
    } else {
      props.setToast({
        error:true,
        text:LOCAL_MESSAGES.NOT_EMPTY
      })
    }
  }
  const {isFetching} = props
  return(
      <FormGroup className="my-3">
        <Label>
          ¿Tienes un cupón? verifica su validez
        </Label>
        {isFetching
          ?  <Progress value={100} animated/>
          :  <InputGroup>
              <Input
                onChange={getValue}
                value={coupon}
                required
                className="custom"
                type="text"
                placeholder="cupón a verificar"
                name="coupon"
                 />
               <InputGroupAddon addonType="append">
               <Button onClick={setVerify} color="primary">
                 Verificar&nbsp;
                 <FontAwesomeIcon icon="paper-plane"/>
               </Button>
             </InputGroupAddon>
             </InputGroup>
        }

      </FormGroup>
  )
}

export default CouponVerifier
