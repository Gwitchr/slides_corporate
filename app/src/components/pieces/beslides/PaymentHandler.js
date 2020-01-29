import React,{useState} from 'react';
import {
  Col,
  Row,
  Container
  // Button
} from 'reactstrap';
import {PlansCont,OrderFormCont} from '../../../containers/beslides';
import {PlanPreview} from '../../elements/beslides';
import {CheckoutCont} from '../../../containers/stripe';

function PaymentHandler(props){
  const [selPlan,setSelPlan] = useState(false)
  const [showPlanPreview,setShowPlanPrev] = useState(false)
  const setPlan =(plan)=>{
    setSelPlan(plan)
  }
  const togglePlanPreview=()=>{
    setShowPlanPrev(!showPlanPreview)
  }
  const {
    visible,
    order,
    selProduct,
    orderFetching,
    plan
  } = props
  return(
    <Container fluid>
      {!order&&!selPlan
        ? <PlansCont
            productGroup={'Beslides'}
            setPlan={setPlan}
            visible={visible}
          />
        :null
      }
      {selPlan&&!showPlanPreview
        ? <div>
          <h3 className="text-center">{selPlan.plan}</h3>
          <OrderFormCont
            plan={selPlan.plan}
            setPlanPreview={togglePlanPreview}
            product_id={selPlan.product_id}/>
        </div>
        :null
      }
      {order&&!orderFetching
        ? <Row>
            <Col>
              <CheckoutCont/>
            </Col>
            <Col xs={12} md={4}>
              <PlanPreview
                order={order}
                plan={plan}
                selProduct={selProduct}
              />
            </Col>
        </Row>
        :null
      }
    </Container>
  )
}

export default PaymentHandler;
