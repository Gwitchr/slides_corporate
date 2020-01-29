import React,{useRef,useState} from 'react';
import {Container,Row,Col} from 'reactstrap';
import {motion} from 'framer-motion'
import {Anim} from '../../elements';
import {useVisible} from '../../../hooks';
import {DELAY_ANIM,ANIM_TRANS} from '../../../constants';

import logo1 from '../../../assets/bodym/services/startup_treatment/logo1.json';
import logo2 from '../../../assets/bodym/services/startup_treatment/logo2.json';
import logo3 from '../../../assets/bodym/services/startup_treatment/logo3.json';

const anims =[
  logo1,
  logo2,
  logo3
]

function FeatureThree(){
  const cont = useRef()
  const visible = useVisible(cont)
  const [currAnim,setAnim] = useState(0)
  const setNext=()=>{
    setTimeout(()=>{
      let nextI = currAnim + 1
      if(nextI>(anims.length-1)){
        setAnim(0)
      } else {
        setAnim(nextI)
      }
    },ANIM_TRANS)
  }
  return(
    <Container tag="section" className="mb-5">
      <Row>
        <Col
          tag={motion.div}
          animate={visible ? "shown" : "hidden"}
           xs={12} sm={6}>
          <motion.h4 key={0}
            variants={{
              shown: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "3vh" },
            }}
            className="mb-0">
            <small>
              Dinamismo y versatilidad para tus redes sociales, video corporativo y más
            </small>
          </motion.h4>
          <motion.h3 key={1}
            variants={{
              shown: { opacity: 1, y: 0, transition:{delay:DELAY_ANIM} },
              hidden: { opacity: 0, y: "3vh" },
            }}
          className="display-3">
            Un&nbsp;
            {/* <br className="d-block d-lg-none"/> */}
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
        <Col className="sect_80" xs={12} sm={6}>
          {anims.map((el,i)=>{
            if(i===currAnim)return <Anim onEnd={setNext} loop={false} key={i} data={el}/>
            return null
          })}
          <br/>
          <div className="text-right">
            <small className="text-muted">
              *Ejemplos
            </small>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default FeatureThree
