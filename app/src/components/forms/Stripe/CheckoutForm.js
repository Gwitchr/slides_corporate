import React,{useState,useEffect} from 'react';
import {injectStripe} from 'react-stripe-elements';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormText,
  Label,
  Button,
  ListGroupItem,
  ListGroup

} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  AnimSend,
  Anim
} from '../../elements';
import {CardDataCollector} from '../../pieces/Stripe';
import {CouponVerifierCont,CouponApplierCont} from '../../../containers/payment';
import {formatNmxn} from '../../../utils';
import {STRIPE_COUNTRIES,MSI_RATES,STRIPE_MESSAGES} from '../../../constants/stripe';

import data from '../../../assets/bodym/sending.json';
import payment from '../../../assets/bodym/sending2.json';

import stripe_badge from '../../../assets/img/icons/stripe/powered_by_stripe.svg'
import flags from '../../../assets/img/icons/stripe/flags.svg'

// Parent container = Checkout
function CheckoutForm (props){
  useEffect(()=>{
    if(props.frontCheck){
      props.stripe.confirmCardPayment(
        props.intent.client_secret
      ).then(function({error,paymentIntent}){
        if(error){
          console.warn('stripe',error)
          props.addToast({
            error:true,
            text:STRIPE_MESSAGES.INTENT_FAILURE
          })
        } else {
          props.addToast({
            error:false,
            text:STRIPE_MESSAGES.INTENT_SUCCESS
          })
          props.setSuccessfulBuy()
        }

      })
    }
    // eslint-disable-next-line
  },[props.frontCheck])
  const initialFormVals = {
    name:'',
    email:'',
    country:'MX'
  }
  const [formVals,setFormVals] = useState({...initialFormVals})
  const [selInstallment,setInstallments] = useState(false)
  const [showAvPayments,setShowAvPayments] = useState(false)
  // const [selCountryPos,setCountryPos] = useState({x:100,y:248})
  const resetCheckout=()=>{
    setShowAvPayments(false)
    setInstallments(false)
  }
  const handleSubmit=(e)=>{
    const {order_id} = props
    const {name,email} = formVals
    e.preventDefault()
    const cardElement = props.elements.getElement('card');
    props.stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name,
        email
      }
    }).then(({paymentMethod,error}) => {
      if(error){

      } else {
        props.startPayIntent({
          order_id,
          payment_method_id:paymentMethod.id
        })
      }
      // console.log('Received Stripe PaymentMethod:', paymentMethod);

    });
  }
  const handleConfirm=(e)=>{
    const {order_id,intent_id} = props
    e.preventDefault()
    props.startIntentConfirm({
      order_id,
      selected_plan:selInstallment,
      intent_id,
      receipt_email:formVals.email
    })
  }
  const handleInstallments=(e,val)=>{
    e.preventDefault()
    setInstallments(val)
  }
  const changeVal=(e)=>{
    const {name,value} = e.target
    setFormVals({...formVals,[name]:value})
  }
  const endAnim=()=>{
    const {error} = props
    props.cancelBuy()
    if(!showAvPayments){
      if(!error){
        setShowAvPayments(true)
      } else {
        props.addToast({
          error:true,
          text:STRIPE_MESSAGES.UNAVAILABLE
        })
      } 

    }

  }
  const selCountryPos = STRIPE_COUNTRIES.find((el)=>el.value===formVals.country).pos
  // console.log('selCountryPos',selCountryPos)
  const countryStyle = {
    background:`url(${flags})`,
    backgroundPosition:`${selCountryPos.x}px ${selCountryPos.y}px`
    // backgroundPosition:`0px 0px`
  }
  const {success_payment,selProduct:{currency_code},updated_amount} = props
  return(
    <Container tag="section">
      {success_payment
        ?<>
        <Row className="justify-content-center">
          <Col xs={10} md={8}>
            <Anim data={payment} loop={true}/>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={10} md={8}>
            <h3>
              {STRIPE_MESSAGES.PAYMENT_SUCCESS}
            </h3>
          </Col>
        </Row>
        </>

        : <div>
          {props.isFetching
            ? <Row className="justify-content-center">
              <Col xs={8}>
                <AnimSend
                  endAnim={endAnim}
                  data={data}
                />
              </Col>
            </Row>
            :showAvPayments
            ? <>
            <Form onSubmit={handleConfirm} id="confirm_payment">
                <Row form>
                <Col>
                  <Label>
                    Métodos de pago disponibles
                  </Label>
                </Col>
              </Row>
              <FormGroup>
                <ListGroup>
                  <ListGroupItem
                    onClick={(e)=>handleInstallments(e,false)}
                    className="d-flex justify-content-between"
                    tag="button"
                    active={!selInstallment}>
                    <span>Total</span>
                    <span>{`Total: ${formatNmxn(updated_amount)} ${currency_code}`}</span>
                  </ListGroupItem>
                  {props.installment_options.map((el,i)=>{
                    const totalMSI = (updated_amount*(1+MSI_RATES[el.count]))
                    return <ListGroupItem
                      onClick={(e)=>handleInstallments(e,el)}
                      className="d-flex justify-content-between"
                      tag="button"
                      active={el.count===selInstallment.count} key={i}>
                      <span>{`${el.count} meses de ${formatNmxn(totalMSI/el.count)} ${currency_code}`}</span>
                      <span><b>{`Total: ${formatNmxn(Math.floor(totalMSI))} ${currency_code}`}</b></span>
                    </ListGroupItem>
                  })}
                </ListGroup>
                </FormGroup>
              {props.installment_options.length
                ?null
                :<FormGroup>
                  <p className="text-info">
                    {STRIPE_MESSAGES.NO_METHODS}
                  </p>
                  <Button onClick={resetCheckout} block color="primary">
                    Seleccionar otro método
                  </Button>
                </FormGroup>
              }
              </Form>
              <CouponApplierCont/>
              <CouponVerifierCont/>
              <FormGroup>
                <Button type="submit" form="confirm_payment" block color="primary">
                  Pagar&nbsp;<FontAwesomeIcon icon="rocket" />
                </Button>
              </FormGroup>


            </>
            :<Form id={`stripe_form_${props.id?props.id:'beslides_n12'}`} onSubmit={handleSubmit}>
              <Row form>
              <Col>
                <Label>
                  Detalles del pago
                </Label>
              </Col>
            </Row>
             <fieldset className="with-state">
                   <label>
                     <span>Nombre</span>
                     <input onChange={changeVal} name="name" className="field" placeholder="Nombre(s) Apellido(s)" required/>
                   </label>
                   <label>
                     <span>Email</span>
                     <input onChange={changeVal} name="email" type="email" className="field" placeholder="alguien@ejemplo.com" required/>
                   </label>
                   <label className="select ">

                     <span>País</span>
                     <div id="country" className={`field ${''}`}>
                       <div id="country_img"
                       style={countryStyle}
                        />
                       <select value={formVals.country} onChange={changeVal} name="country">
                         {STRIPE_COUNTRIES.map(({value,name,active,selected},i)=>{
                           if(active)return <option key={i} value={value}>{name}</option>
                           return null
                         })}
                       </select>
                     </div>
                   </label>
                 </fieldset>
                 <FormGroup>
                   <CardDataCollector/>
                 </FormGroup>
                 <FormGroup>
                   <Button block type="submit" form={`stripe_form_${props.id?props.id:'beslides_n12'}`} color="primary">
                     Continuar
                   </Button>
                   <FormText>
                      Para ver opciones de pago disponibles
                   </FormText>
                 </FormGroup>
            </Form>
          }
        </div>
      }

      <Row className="justify-content-end">
        <Col className="text-right">
          <img src={stripe_badge} alt=""/>
        </Col>
      </Row>
    </Container>

  )
}

export default injectStripe(CheckoutForm)
