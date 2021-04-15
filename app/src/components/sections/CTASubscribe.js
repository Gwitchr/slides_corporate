import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import {SubscribeCont} from '../../containers';

import bg_accent from '../../assets/img/utils/bg_accents/green_cards.svg'

const background={
  backgroundImage:`url(${bg_accent})`
}

function CTASubscribe(){
  return(
    <Container className={``}>
      <Container className="subs_land_cont abs_cont rounded">
        <div className="bg_accent" style={{...background}}/>
        <Row className="">
          <Col className="sect_30 d-flex flex-column justify-content-center">
            <SubscribeCont light buttonColor="secondary"/>
          </Col>
          <Col>

          </Col>
        </Row>
      </Container>

    </Container>

  )
}

export default CTASubscribe;
