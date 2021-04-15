import React from 'react';
// import {Link} from 'react-router-dom';
import {Container,Row,Col,Nav,NavItem,NavLink} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// import {Subscribe} from '../forms';

import logo from '../../assets/img/logo/logo.svg';
import '../../style/footer.css';

export const Footer=()=>{
  return (
    <Container tag="footer" fluid className="footer text-light pb-5 text-left animated fadeInPlace">
      <Container className="">
      <Row className="justify-content-between align-items-center">
          <Col xs={12} md={2}  className="mb-5 d-flex flex-column justify-content-start">
            <img src={logo} className="img-fluid logo-footer mx-auto" alt=""/>
          </Col>
          <Col xs={12} md={10}>
            <Container>
              <Row className="text-center text-sm-right">
                 <Col xs={12} >
                   <h4 className="title_footer">
                     Contacto
                   </h4>
                   <h5>Teléfono</h5>
                   <p>
                     <a className="link_footer" href="tel:+525514540568">(55) 14 54 06 68</a>
                   </p>
                   <hr className="w-25 hr_light ml-0"/>

                   <p>
                 </p>

                   <h5>Ubicación</h5>
                   <address className="">
                       <a href="https://goo.gl/maps/ot2PcktcSkLctbTE9">
                         Cholula 35, La Paz. Puebla
                       </a>
                   </address>

                 </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav className="justify-content-center">
              <NavItem>
                <NavLink className="link_footer mr-1" target="_blank" rel="noopener noreferrer" href="https://facebook.com/designweekpuebla">
                  <FontAwesomeIcon icon={['fab','facebook-square']} />
                </NavLink>
              </NavItem> &nbsp;
              <NavItem>
                <NavLink className="link_footer mr-1" target="_blank" rel="noopener noreferrer" href="https://medium.com/designweekpuebla">
                  <FontAwesomeIcon icon={['fab','medium']} />
                </NavLink>
              </NavItem>
              &nbsp;
              <NavItem>
                <NavLink className="link_footer mr-1" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/designweekpuebla/">
                  <FontAwesomeIcon icon={['fab','instagram']} />
                </NavLink>
              </NavItem>
              &nbsp;
              <NavItem>
                <NavLink className="link_footer mr-1" target="_blank" rel="noopener noreferrer" href="mailto:hola@designweekpuebla.com?subject=%C2%A1Quiero%2520informaci%25C3%25B3n!">
                    <FontAwesomeIcon icon={'envelope'} />
                </NavLink>
              </NavItem>
              &nbsp;
            </Nav>
          </Col>
        </Row>
        {/* <Row className="justify-content-center my-3 text-center">
          <Col xs={12} md={4}>
            <p>
              Suscríbete al boletín informativo
            </p>
            <Subscribe isStacked={false}/>
          </Col>
        </Row> */}
        <Row className="text-center mt-1">
          <Col>
            <p>
              N12 Estudio © {new Date().getFullYear()}
            </p>
          </Col>
        </Row>




      </Container>
    </Container>
  )
}
