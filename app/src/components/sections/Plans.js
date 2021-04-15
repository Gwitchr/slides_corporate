import React from 'react';
import {Link} from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';

function Plans ({solutions}){
  return(
    <Container className="sect_70">
      <Row className="py-5">
        <Col className="my-5">
          <h3 className="sect_title" >
            Planes pensados contigo en mente
          </h3>
        </Col>
      </Row>
      <Row className="pb-5 mb-5">
        {solutions.map(({img,color,text,title,link},i)=><Col key={i}>
          <Card className={`card_plans bg_${color} text-light text-center`}>
            <CardImg src={img}/>
            <CardBody>
              <CardTitle className="plan_title">
                {title}
              </CardTitle>
              <CardText className="">
                {text}
              </CardText>
              <Button color="primary" tag={Link} to={link}>
                Conoce más
              </Button>

            </CardBody>
          </Card>
        </Col>)}
      </Row>
    </Container>
  )
}

export default Plans;
