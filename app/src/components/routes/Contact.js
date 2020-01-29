import React from 'react';
import {Container} from 'reactstrap';
import {Jumbo,Footer} from '../pieces';
import {ContactCont} from '../../containers'

export const Contact =()=>{
  return (
    <main>
      <Jumbo className=""/>
      <Container className="pt-5">
        <ContactCont/>
      </Container>
      <Footer/>
    </main>
  )
}
