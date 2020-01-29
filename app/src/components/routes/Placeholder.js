import React from 'react';
import {Jumbotron,Container,Row,Col} from 'reactstrap';
import {SEO} from '../elements';
import '../../style/landing.css';
import logo from '../../assets/img/logo/logo.svg';

export const Placeholder =()=>{
  const fond = {
    background:'#302f3d',
    minHeight:'100vh'
  }
  return (
    <>
      <SEO title="Inicio"/>
      <Jumbotron className="placeholder d-flex flex-column justify-content-center" fluid style={fond}>
        <Container className="align-items-center">
          <Row className="justify-content-center mb-5">
            <Col xs={8} sm={3}>
              <img src={logo} width="100%" alt=""/>
            </Col>
          </Row>
          <Row className=" mt-5">
            <Col>
              <h5 className="title text-light text-uppercase text-center">Sitio en reconstrucción</h5>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>

  )
}
