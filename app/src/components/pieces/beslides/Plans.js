import React,{useState} from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import {motion} from 'framer-motion';
import {DELAY_ANIM} from '../../../constants';
import {formatNmxn} from '../../../utils';
// import {PlanCardCont} from '../../../containers/startup_treatment';
import {PlanCard} from '../../elements/beslides';

function Plans({setPlan,products,visible}){
  const [featVis,setFeatV] = useState(true)
  const toggle=()=>{
    setFeatV(!featVis)
  }
  // const cont = useRef()
  // const visible = useVisible(cont)
  return(
    <Container className="mb-5">
      <Row className="sect_70 align-items-center">
        <Col
          tag={motion.div}
          animate={visible ? "shown" : "hidden"}
          xs={12} sm={4}>
          <motion.h4
            key={0}
            variants={{
              shown: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "3vh" },
            }}
            className="mb-0">
            <small>
              ¿Listo para empezar?
            </small>
          </motion.h4>
          <motion.h3 key={1}
            variants={{
              shown: { opacity: 1, y: 0, transition:{delay:DELAY_ANIM} },
              hidden: { opacity: 0, y: "3vh" },
            }}
          className="display-3">
            Escoge
            <br/>
            <span className="bg_text_main text-light text-nowrap">un Plan</span>

          </motion.h3> <br/>
          <h4 className="mb-0">
            <small>
              <i>
                Costo transparente y fácil
              </i>
            </small>
          </h4>
        </Col>
        <Col>
          <Row className="text-center">
            {products.map(({
              name,
              main_image,
              front_id,
              _id,
              price,
              status,
              offer_price,
              currency_code,
              main_features,
              secondary_features,
              status_message
            },i)=><Col key={i}>
              <PlanCard
                setPlan={setPlan}
                toggle={toggle}
                featVis={featVis}
                icon={main_image}
                plan={name}
                product_id={_id}
                id={front_id}
                price={status==='offer'
                  ?`$${formatNmxn(offer_price)}`
                  :`$${formatNmxn(price)}`}
                prevPrice={status==='offer'
                  ?`$${formatNmxn(price)}`
                  :null}
                features={main_features}
                status_message={status_message}
                hiddenFeatures={secondary_features}/>
            </Col>)}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Plans
