import React,{useRef} from 'react';
import {Container,Row,Col} from 'reactstrap';
import {motion} from 'framer-motion'
import {useVisible} from '../../../hooks';
import {DELAY_ANIM} from '../../../constants';
import {FtOneCards} from './'

import sect_1 from '../../../assets/img/services/startup_treatment/images/sect_1.png'

function FeatureOne(){
  const cont = useRef()
  const visible = useVisible(cont)
  return(
    <Container tag="section" className="mb-5">
      <Row className="align-items-center">
        <Col
          tag={motion.div}
          className="sect_80 d-flex flex-column justify-content-center text_sections"
          animate={visible ? "shown" : "hidden"}
          xs={12} sm={5}
           >
          <motion.h4 key={0}
            variants={{
              shown: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "3vh" },
            }}
            className="mb-0">
            <small>
              Actualiza o crea tu presencia en Internet
            </small>
          </motion.h4>
          <motion.h3 key={1}
            variants={{
              shown: { opacity: 1, y: 0, transition:{delay:DELAY_ANIM} },
              hidden: { opacity: 0, y: "3vh" },
            }}
          className="display-3">
            Una&nbsp;
            <br className="d-block d-lg-none"/>
            <span className="bg_text_main text-light text-nowrap">Landing page</span>
            <br/>
            increíble
          </motion.h3> <br/>
          <h4 className="mb-0">
            <small ref={cont}>
              Atrae a tus clientes a tu producto o servicio con
            </small>
          </h4>
        </Col>
        <Col className="abs_cont" xs={12} sm={7} >
            <motion.img
              animate={visible ? "shown" : "hidden"}
              variants={{
                shown: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: "3vw" },
              }}
              className="img_sect_1" src={sect_1} alt=""/>
        </Col>
      </Row>
      <FtOneCards/>
    </Container>
  )
}

export default FeatureOne
