import React from 'react';
import {
  Jumbotron,
  Container,
  Row,
  Col
  // Button
} from 'reactstrap';
import '../../style/jumbo.css';

function Jumbo(){
  return(
    <Jumbotron className="" fluid>
       <Container >
         <Row className="sect_80 align-items-center">
           <Col>
             <h3 className="display-3">
               Presentaciones del futuro, hoy
             </h3>
           </Col>
           <Col>

           </Col>
         </Row>
       </Container>
     </Jumbotron>
  )
}

export default Jumbo;
