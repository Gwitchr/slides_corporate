import React from 'react';
import {Row,Col} from 'reactstrap';

function Full({full_img}){
  return(
    <Row>
      <Col>
        <img className="full_img" src={full_img} alt="full sized"/>
      </Col>
    </Row>
  )
}

export default Full;
