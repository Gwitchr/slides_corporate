import React from 'react';
import {
  Jumbotron,
  Container,
  Row,
  Col
  // Button
} from 'reactstrap';
import '../../style/jumbo.css';

function Jumbo({heroText}){
  return(
    <Jumbotron className="" fluid>
       <Container >
         <Row className="sect_80 align-items-center">
           <Col>
             <h3 className="display-3">
               {heroText}
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
