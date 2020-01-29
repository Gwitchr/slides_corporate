import React,{useState,useEffect} from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import {PromosCont} from '../../containers';
import '../../style/promos.css';
import {PROMO_SHOW} from '../../constants'

import bg_accent from '../../assets/img/utils/bg_accents/green_cards.svg'

function Promos(){
  const [visible,setVisible] = useState(false)
  const toggle=()=>{
    setVisible(!visible)
  }
  useEffect(()=>{
    const timer = setTimeout(()=>toggle(),PROMO_SHOW)
    return ()=>clearTimeout(timer)
    // eslint-disable-next-line
  },[])
  const background={
    backgroundImage:`url(${bg_accent})`
  }
  return(
    <Container className={`p-3 promo_out ${visible?'promo_in':''}`}>
        <div className="bg_accent" style={{...background}}/>
        <Row className="text-left">
          <Col className="d-flex justify-content-start">
            <Button className="text-light" onClick={toggle} close />
          </Col>
        </Row>
        <Row className="mt-2 text-light">
          <Col>
            {visible
              ?<PromosCont closePromo={()=>setVisible(false)} />
              :null
            }
          </Col>
        </Row>
    </Container>
  )
}

export default Promos
