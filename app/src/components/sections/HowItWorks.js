import React,{useState} from 'react';
import {
  Container,
  Row,
  Col,
  NavItem,
  NavLink,
  Nav,
  Badge
} from 'reactstrap';

function HowItWorks({userProc}){
  const [currSect,setSect] = useState(0)
  return(
    <Container className="sect_50 color_sect text-light" fluid>
      <Container className="py-5">
        <Row className="my-5">
          <Col>
            <h3 className="sect_title" >
              La vida de BeSlides
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav className="d-none d-md-flex" justified tabs>
              {userProc.map((el,i)=><NavItem onClick={()=>setSect(i)} key={i}>
                <NavLink className="link_how" href="#" active={currSect===i}>
                  <Badge color="info">{i+1}</Badge>&nbsp;{el.title}
                </NavLink>
              </NavItem>)}
             </Nav>
             <Nav className="d-flex d-md-none" vertical>
               {userProc.map((el,i)=><NavItem onClick={()=>setSect(i)} key={i}>
                 <NavLink className="link_how" href="#" active={currSect===i}>
                   <Badge color="info">{i+1}</Badge>&nbsp;{el.title}
                 </NavLink>
               </NavItem>)}
              </Nav>

          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={3} className="d-flex align-items-center">
            <p className="multiline">
              {userProc[currSect].text}
            </p>
          </Col>
          <Col>
            <img className="img-fluid" src={userProc[currSect].img} alt={userProc[currSect].title}/>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default HowItWorks;
