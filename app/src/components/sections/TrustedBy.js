import React from 'react';
import {Container,Row,Col} from 'reactstrap';

function TrustredBy({customers}){
  return(
    <Container>
      <Row>
        {customers.map(({src},i)=><Col key={i}>
            <img src={src} alt=""/>
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default TrustredBy;
