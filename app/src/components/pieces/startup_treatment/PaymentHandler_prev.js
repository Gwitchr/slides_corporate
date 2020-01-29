import React from 'react';
import {
  Col,
  Row,
  Button
} from 'reactstrap';
import {OrderFormCont} from '../../../containers/startup_treatment';
import {
  // PayPalBtn,
  AnimSend
} from '../../elements';
import {PlanPreview} from '../../elements/startup_treatment';
import data from '../../../assets/bodym/sending2.json';

function PaymentHandler(props){
  const {
    startStripePurchase,
    cancelBuy,
    order,
    orderFetching,
    message,
    error,
    plan:{plan,product_id},
    selProduct,
    isFetching
  } = props
  const startPurchase =(order_id,paym_type)=>{
    let query = new URLSearchParams()
    query.append('paym_type',paym_type)
    startStripePurchase(`${order_id}?${query.toString()}`)
  }
  return(
    <Row className="justify-content-center h-100 fadeInPlace">
      <Col sm={isFetching&&6}>
            {!isFetching&&!message&&!error
              ? <div>
                {order&&!orderFetching
                  ? <div>
                    <PlanPreview order={order} plan={plan} selProduct={selProduct}/>
                    <Row className="mt-3 flex-column justify-content-center align-items-center">
                      <Col xs={8}>
                        <Button
                          onClick={()=>startPurchase(order._id,'pay_full')}
                          disabled={isFetching}
                          className="mb-3" block color="primary">
                          Pagar completo (10% desc adicional)
                        </Button>
                        <Button  onClick={()=>startPurchase(order._id,'pay_downpayment')}
                          disabled={isFetching}
                          className="mb-3" block color="primary">
                          Pagar 50% adelanto
                        </Button>
                        <div>
                          {/* <PayPalBtn
                            purchaseError={purchaseError}
                            purchase={purchase}
                            id={'payment_sut'}/> */}
                        </div>
                      </Col>
                    </Row>
                  </div>
                  : <OrderFormCont plan={plan} product_id={product_id}/>
                }
              </div>
              :<h3 className="text-center">
                {message
                  ?message.toString()
                  :error
                  ?error.toString()
                  :null
                }
              </h3>
            }
            {isFetching&&<AnimSend
                endAnim={cancelBuy}
                data={data}/>}
          </Col>
    </Row>
  )
}

export default PaymentHandler
