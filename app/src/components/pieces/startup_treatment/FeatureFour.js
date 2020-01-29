import React,{useRef} from 'react';
import {Container,Row,Col} from 'reactstrap';
import {motion} from 'framer-motion'
import {PlanPreview} from '../../elements/startup_treatment';
import {useVisible} from '../../../hooks';
import {DELAY_ANIM} from '../../../constants';

function FeatureFour(){
  const cont = useRef()
  const visible = useVisible(cont)
  return(
    <Container tag="section" className="mb-5 sect_40">
      <Row>
        <Col
          tag={motion.div}
          animate={visible ? "shown" : "hidden"}
           xs={{size:12,order:2}} sm={{size:7,order:1}}>
          <motion.h4 key={0}
            variants={{
              shown: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "3vh" },
            }}
            className="mb-0">
            <small>
              Dinamismo y versatilidad con
            </small>
          </motion.h4>
          <motion.h3 key={1}
            variants={{
              shown: { opacity: 1, y: 0, transition:{delay:DELAY_ANIM} },
              hidden: { opacity: 0, y: "3vh" },
            }}
          className="display-3">
            Un&nbsp;
            <span className="bg_text_main text-light text-nowrap">Logo animado</span>
            <br/>
            increíble
          </motion.h3> <br/>
          <h4 className="mb-0">
            <small ref={cont}>
              Dale un refresh a tu marca
            </small>
          </h4>
        </Col>
        <Col xs={{size:12,order:1}} sm={{size:5,order:2}}>
          <PlanPreview/>
        </Col>
      </Row>
    </Container>
  )
}

export default FeatureFour
