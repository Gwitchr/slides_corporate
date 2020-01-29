import React,{useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {AnimatePresence,motion} from 'framer-motion';
import {Row,Card,Nav,NavItem,NavLink,Col,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';

import landing from '../../../assets/img/icons/startup_treatment/landing.svg';
import content from '../../../assets/img/icons/startup_treatment/content.svg';
import focus from '../../../assets/img/icons/startup_treatment/focus.svg';

const cards = [
  {
    img:landing,
    title:'¿Qué es una Landing page?',
    short:'Landing',
    text:`Una landing page es una página de un sitio web enfocada a la venta de un producto o servicio específico.
    Puede pertenecer a un sitio más grande`
  },
  {
    img:focus,
    title:'Enfoque',
    short:'Enfoque',
    text:`El enfoque que se da a una Landing page es el de dar la información suficiente para generar una oportunidad de venta, también llamado lead.
    Por eso el contenido se centra en un servicio o producto. `
  },
  {
    img:content,
    title:'¿Qué secciones tiene?',
    short:'Contenido',
    text:`Todo en la Landing page está enfocado a convertir, es decir transformar las visitas en oportunidades de venta.
    Las secciones más comunes son:
    - Encabezado,
    - Introducción,
    - Características clave del servicio o producto,
    - Contacto
    - Pie de página`
  },
]


function FtOneCards(){
  const [indexStory,setCurrStory] = useState(0)
  const [direction,setDirection] = useState(false)
  const changeCarousel =async(dir)=>{
    await setDirection(dir)
    await changeCard(dir)
  }
  const changeCard=(dir)=>{
    let nextPage = dir?indexStory+1:indexStory-1
    if(nextPage<0) nextPage = (cards.length-1)
    if(nextPage>(cards.length-1)) nextPage = 0
    setCurrStory(nextPage)
  }
  const setCarousel=(ind)=>{
    setCurrStory(ind)
  }
  const animStates = {
    enter:(direction)=>({
      x:direction?'30%':'-30%',
      opacity:0
    }),
    center:{
      opacity:1,
      zIndex:1,
      x:0
    },
    exit:(direction)=>({
      zIndex:0,
      x:direction?'-30%':'30%',
      opacity:0
    }),
  }

  return(
    <div className="sect_60 my-1">
      <Row className="align-items-center">
        <Col xs={12} md={3} className="mb-3">
          <Nav vertical>
            {cards.map(({short},i)=><NavItem active={i===indexStory} key={i}>
              <NavLink href="#" onClick={()=>setCarousel(i)}>
                {short}
              </NavLink>
            </NavItem>)}
          </Nav>
          <Row className="justify-content-center mt-4">
            <div className="car_prev d-flex align-items-center">
              <FontAwesomeIcon size="lg" onClick={()=>changeCarousel(false)} icon="chevron-left"/>
            </div>
            &nbsp;
            {` ${indexStory+1} de ${cards.length} `}
            &nbsp;
            <div className="car_next d-flex align-items-center">
              <FontAwesomeIcon size="lg" onClick={()=>changeCarousel(true)} icon="chevron-right"/>
            </div>
          </Row>
        </Col>
        <Col className="d-flex align-items-center" xs={12} md={9}>
          <div className="abs_cont">
            <ExplCard className="card_placeholder"
                      info={cards[indexStory]}/>
            <div className="card_feat_overlay">
              <AnimatePresence>

                <motion.div
                    className="abs_cont"
                    custom={direction}
                    variants={animStates}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    key={indexStory}
                    >

                    <ExplCard className="expl_card shadow" info={cards[indexStory]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </Col>
      </Row>

    </div>
  )
}

function ExplCard({className,info:{src,title,text,img}}){
  return(
    <Card className={`${className} text-light`}>
      <div className="d-flex justify-content-center">
        <CardImg src={img} className="feat_img"/>
      </div>
      <CardBody>
        <CardTitle tag="h3">
          {title}
        </CardTitle>
        <hr/>
        <CardText className="multiline">
          {text}
        </CardText>
      </CardBody>
    </Card>
  )
}

export default FtOneCards;
