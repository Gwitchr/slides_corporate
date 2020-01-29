import React from 'react';
import {Container,Row} from 'reactstrap';
import {Footer,Jumbo} from '../pieces'
import '../../style/sections.css'

export const NoMatch =()=>{
  const title = <div>
    <h1 className="">
      No encontrado
      <span role="img" aria-label="woman crossing amrs">🙅‍♀️</span>
      <span role="img" aria-label="man doesn't know">🤷‍♂️</span>
    </h1>
    <br/>
    <p className="lead">

    </p>

  </div>
  return(
    <section>
      <Jumbo className="jumbo generic" title={title}/>
      <Container fluid>
        <Container className="text-center">
          <Row>
          </Row>
        </Container>
      </Container>
      <Footer/>
    </section>
  )
}
