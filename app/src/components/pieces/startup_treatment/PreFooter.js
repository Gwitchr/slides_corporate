import React from 'react';
import {Container} from 'reactstrap';

const background = {
    backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,0),rgba(10,14,23,1)),url(https://n12mx.s3-us-west-1.amazonaws.com/images_large/startup_treatment/footer_startuptreatment.jpg)`,
    // position:'relative',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    // backgroundPosition:'right',
    minHeight: '50vh'
}

function PreFooter(){
  return(
    <Container style={background} fluid>

    </Container>
  )
}

export default PreFooter
