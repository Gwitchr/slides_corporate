import React,{useRef} from 'react';
import {Container,Row,Col,CardDeck,Card} from 'reactstrap';
import {motion} from 'framer-motion';
import {AnimIcon} from '../../elements';
import {useVisible} from '../../../hooks';
import {DELAY_ANIM} from '../../../constants';

function Intro({icons=[],background}){
  const cont = useRef()
  const visible = useVisible(cont)
  return (
    <Container tag="section" className="text-center pt-5 abs_cont">
      {background&&<div className="trans_sect" style={{...background,top:'20%'}}/>}
      <Row className="justify-content-center">
       <Col xs={12} sm={8}>
          <h3>
            Una de las principales razones por las que un buen producto o servicio no prospera en el mercado es porque falla al momento de transmitir su calidad en el ambiente digital.
            <br/><br/>
            Diseñamos el programa de <b>The Startup Treatment</b> pensando en reducir la brecha que hay entre los grandes productos/servicios y su mercado objetivo

           </h3>
       </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2 className="display-3 main_font">
            El <b>Startup Treatment</b> es un servicio:
          </h2>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <CardDeck>
            {icons.map(({title='',icon,text=''},i)=>(
                <Card className="card_benefits bg-transparent border-light" key={i} body>
                  <h4>{title}</h4>
                  <AnimIcon data={icon}/>
                  {/* <img className="img-fluid p-5" src={icon} alt=""/> */}
                  {text}
                </Card>
            ))}
          </CardDeck>
        </Col>

      </Row>
      <Row className="sect_70 align-items-center">
          <Col>
            <h2 ref={cont}  className="display-3 main_font">
              <motion.div
                animate={visible?'shown':'hidden'}
                variants={{
                shown: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y:'3vh' },
              }}>Comunica profesionalismo</motion.div>
              <motion.div
                animate={visible?'shown':'hidden'}
                className="font-weight-bold"
                variants={{
                shown: { opacity: 1, y: 0,transition:{delay:DELAY_ANIM} },
                hidden: { opacity: 0, y:'3vh' },
              }}>
                <span className="bg_text_main text-light">inigualable</span>
              </motion.div>
            </h2>
            <h3 >
              Alinea la gran calidad de tu producto/ servicio con tu imagen en línea
              <br/><b className="text_underlined">con un servicio que incluye:</b>
            </h3>
          </Col>
      </Row>
    </Container>
  )
}

export default Intro
