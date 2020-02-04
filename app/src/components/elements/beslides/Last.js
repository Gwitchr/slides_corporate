import React,{useState} from 'react';
import {
  Row,Col,Card,CardImg,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Nav,NavItem,
  NavLink,
  Button
} from 'reactstrap';
import {BESLIDES_FEATURES} from '../../../constants/beslides'

import beslides from '../../../assets/img/services/beslides/beslides_card.svg'

const possibleT = ['Info','Características']

function Last({toggle,reset,cardImg,
  companyData
}){
  const [tabSel,setSelTab] = useState('Info')
  const handleClick=(e,tab)=>{
    e.stopPropagation()
    setSelTab(tab)
  }
  return (
    <Row className="justify-content-center align-items-center text-center text-md-left my-5 my-md-auto pt-5 h-100">
      <Col xs={12} sm={5}>
        <Card className="animated fadeInPlace shadow bg-light mb-2">
        <CardImg src={cardImg}/>
        <CardBody>
        <CardSubtitle>
          {companyData&&companyData.subtitle}
        </CardSubtitle>
        <CardTitle
          tag="h3"
          className="display-3">
            {companyData&&companyData.title}
        </CardTitle>
        <CardText className="multiline">
          {companyData&&companyData.info}
        </CardText>
      </CardBody>
      <CardFooter>
          <Button onClick={reset} color="link">
            Volver a ver BeSlides
          </Button>
          <Button
            // onClick={()=>toggle(false)}
            tag="a"
             color="primary"
             target="_blank"
             rel="noopener noreferrer"
            href={companyData?companyData.contact_link:''}
            >
            Contáctanos
          </Button>
      </CardFooter>
      </Card></Col>
      <Col xs={12} sm={5}>
        <Card onClick={()=>toggle(true)} className="animated fadeInPlace shadow" inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardImg src={beslides} />
        <CardHeader>
          <Nav tabs card>
            {possibleT.map((el,i)=><NavItem key={i}>
              <NavLink onClick={(e)=>handleClick(e,possibleT[i])} active={tabSel===possibleT[i]}>
                {el}
              </NavLink>
            </NavItem>)}
          </Nav>
        </CardHeader>
        <CardBody>
       <CardSubtitle>
         Presentaciones digitales elegantes
      </CardSubtitle>
       <CardTitle
         tag="h3"
         className="display-3">
           BeSlides
       </CardTitle>
       {tabSel===possibleT[0]
         ?<CardText className="animated fadeInPlace">
           Comunica tus ideas de una manera sencilla y efectiva.
         </CardText>
         :tabSel===possibleT[1]
         ?<CardText className="animated fadeInPlace">
           <ul>
             {BESLIDES_FEATURES.map((feat,i)=><li key={i}>
               {feat}
             </li>)}
           </ul>
         </CardText>
         :null
       }
     </CardBody>


       <CardFooter>
         ¿Te gustó esta BeSlide?
         &nbsp;&nbsp;
         <Button color="primary">
           Pide la tuya aquí
         </Button>
       </CardFooter>
      </Card></Col>


    </Row>
  )
}

export default Last;
