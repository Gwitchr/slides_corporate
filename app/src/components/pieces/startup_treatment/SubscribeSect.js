import React,{useRef} from 'react';
import {Container,Row,Col} from 'reactstrap';
import {motion} from 'framer-motion'
import {SubscribeCont} from '../../../containers';
import {Counter} from '../../elements'
import {useVisible} from '../../../hooks';
import {DELAY_ANIM} from '../../../constants';

function Subscribe(){
  const cont = useRef()
  const visible = useVisible(cont)
  return(
    <Container className="mb-5 contr_sect" fluid>
      <Container>
        <Row className="sect_70 align-items-center">

          <Col xs={{size:12,order:2}} sm={{size:6,order:1}}>
            <SubscribeCont list="startup_treatment"/>
            <Row className="justify-content-center mt-5">
              {/* <Counter primary={'Consumo'}
                   className="text-center border_dark_right"
                   time={3000}
                   timeOut={1}
                   last={6}
                   restart={visible}
                   // pref={'tazas'}
                   postf={'tazas'}
                   goal={15}/> */}
              <Counter primary={'Satisfacción'}
                   className="text-center border_dark_right"
                   time={3000}
                   timeOut={1}
                   last={6}
                   restart={visible}
                   postf={'%'}
                   goal={100}/>
              <Counter primary={'Líneas de código'}
                   className="text-center"
                   time={3000}
                   timeOut={1}
                   last={10}
                   restart={visible}
                   postf={'k'}
                   goal={55}/>
            </Row>
          </Col>
          <Col
            tag={motion.div}
            animate={visible ? "shown" : "hidden"}
            className="text-right"
            xs={{size:12,order:1}} sm={{size:6,order:2}}>
            <motion.h4 key={0}
              variants={{
                shown: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "3vh" },
              }}
              className="mb-2">
              <small>
                Suscríbete a nuestra serie de artículos
              </small>
            </motion.h4>
            <motion.h3 key={1}
              variants={{
                shown: { opacity: 1, y: 0, transition:{delay:DELAY_ANIM} },
                hidden: { opacity: 0, y: "3vh" },
              }}
            className="">
                Recibe de primera mano información acerca de cómo ideamos este servicio pensando en ti y en tus clientes, lee la historia, ventajas y descubrimientos mientras creábamos el&nbsp;<br/>
              <b>Startup Treatment</b>
            </motion.h3> <br/>
            <h4 className="mb-0">
              <small ref={cont}>
                ¿Necesitas saber más antes de comprar?
              </small>
            </h4>
          </Col>
        </Row>
      </Container>

    </Container>
  )
}

export default Subscribe
