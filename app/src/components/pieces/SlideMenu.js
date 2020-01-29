import React from 'react';
import {Container,Row,Col,Button} from 'reactstrap';
import '../../style/slidemenu.css';

const SlideMenu =({className,slideMenu,toggleMenu,children})=>{
  return (
    <Container className={`${className} slideout ${slideMenu&&'slidein'}`}>
      <Row className="text-left pt-3">
        <Col className="d-flex justify-content-start">
          <Button onClick={()=>toggleMenu(slideMenu)} close />
        </Col>
      </Row>
      <Row className="mt-5 pb-5">
        <Col>
          {children}
        </Col>
      </Row>

    </Container>
  )
}

export default SlideMenu
