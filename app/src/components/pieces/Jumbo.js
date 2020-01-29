import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

export const Jumbo = ({src,className,title}) => {
  const style = {
    backgroundImage:`url(${src})`,
    backgroundSize:'cover',
    backgroundPosition:'center'
  }
  return (
    <div>
      <Jumbotron className={`${className} d-flex justify-content-center align-items-center`} style={style} fluid>
        <Container className="d-flex justify-content-center align-items-center">
          {title}
        </Container>
      </Jumbotron>
    </div>
  );
};
