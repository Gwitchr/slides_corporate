import React,{useRef} from 'react';
import {Container,Row,Col} from 'reactstrap';
import {motion} from 'framer-motion'
import {useVisible} from '../../../hooks';
import {DELAY_ANIM} from '../../../constants'

import sect_2 from '../../../assets/img/services/startup_treatment/images/sect_2.png'

function FeatureTwo({background}){
  const cont = useRef()
  const visible = useVisible(cont)
  return(
    <Container tag="section" className={`mb-5 text-right ${background?'abs_cont':''}`}>
    {background&&<div className="trans_sect" style={{...background,top:'20%'}}/>}
      <Row>
      <Col className="abs_cont"
      xs={{size:12,order:2}} sm={{size:7,order:1}}
       >
          <motion.img
            animate={visible ? "shown" : "hidden"}
            variants={{
              shown: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: "-3vw" },
            }}
            className="img-fluid img_sect_2" src={sect_2} alt=""/>
      </Col>
      <Col
        tag={motion.div}
        className="sect_80 d-flex flex-column justify-content-center"
        animate={visible ? "shown" : "hidden"}
        xs={{size:12,order:1}} sm={{size:5,order:2}}
         >
        <motion.h4 key={0}
          variants={{
            shown: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: "3vh" },
          }}
          className="mb-0">
          <small>
            Comparte y viralízate con
          </small>
        </motion.h4>
        <motion.h3 key={1}
          variants={{
            shown: { opacity: 1, y: 0, transition:{delay:DELAY_ANIM} },
            hidden: { opacity: 0, y: "3vh" },
          }}
          className="display-3">
            Sorprendentes<br/>
            <span className="bg_text_main text-light text-nowrap">Be-Cards</span>

        </motion.h3> <br/>
        <h4 className="mb-0">
          <small ref={cont}>
            <i>
              Business Electronic Cards
            </i>
          </small>
        </h4>
      </Col>

      </Row>
    </Container>
  )
}

export default FeatureTwo
