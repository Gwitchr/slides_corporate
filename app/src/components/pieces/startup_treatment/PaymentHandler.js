import React from 'react';
import {
  Container,
  Col,
  Row
} from 'reactstrap'
import {OrderFormCont} from '../../../containers/startup_treatment';
import {PlanPreview} from '../../elements/startup_treatment';
import {CheckoutCont} from '../../../containers/stripe';

function PaymentHandler(props){
  const {
    plan:{plan,product_id},
    selProduct,
    order,
    orderFetching
  } = props
  return(
    <Container fluid>
      {order&&!orderFetching
        ?<>
            <Row>
                <Col>
                  <PlanPreview
                    order={order}
                    plan={plan}
                    selProduct={selProduct}
                  />
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center">
              <Col xs={12} md={8}>
                <CheckoutCont/>
              </Col>
            </Row>
        </>
        :<OrderFormCont plan={plan} product_id={product_id}/>
      }
    </Container>
  )
}

export default PaymentHandler;
