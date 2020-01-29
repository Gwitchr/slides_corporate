import React,{useRef} from 'react';
import {Jumbotron,Button,Container,Row,Col,Badge} from 'reactstrap';
import {TextChange,Anim} from '../../elements';
import {useVisible} from '../../../hooks';
import data from '../../../assets/bodym/hero.json';
import '../../../style/jumbo.css';

import icon from '../../../assets/img/services/startup_treatment/icon.svg'

function Jumbo(){
  const cont = useRef()
  const visible = useVisible(cont,true)
  return(
    <Jumbotron className="jumbo_80 jumbo_sut jumbo_anim d-flex flex-column justify-content-center align-items-start abs_cont" fluid>
      <Anim visible={visible} rendererSettings={{preserveAspectRatio: 'xMaxYMid slice'}} loop={true} speed={.5} data={data} className="anim_bg"/>
      <Container>
        <Row>
          <Col xs={12} sm={10} md={8}>
            <div className="above d-flex align-items-center">
              <h5 className="above_text">
                <img ref={cont} className="d-inline mr-2" width="60px" src={icon} alt=""/>
                <b>The Startup Treatment</b>
                <Badge className="ml-2" pill color="info">
                    ¡Nuevo!
                </Badge>
              </h5>


            </div>
             <TextChange
               className="display-4"
               classText="second_font_color"
               pre_text={'Que tu empresa'}
               text_possible={['crezca','venda','escale']}
               line_three={'como una'}
               line_four={'Startup en'}
               text_possible_2={['expansión','crecimiento','ascenso']}
               />
             <p className="lead"></p>
             <hr className="my-2" />
             <p>
               Transmite la escalabilidad, poder, crecimiento e imagen de una Startup con nuestro servicio. <br/> Obten un landing page, e-card y una actualización de tu imagen
             </p>
             <p className="lead">
               <Button tag={'a'} href="#planes" color="primary">¡Lo quiero!</Button>
             </p>
          </Col>
          <Col>

          </Col>
        </Row>
      </Container>
     </Jumbotron>
  )
}

export default Jumbo
