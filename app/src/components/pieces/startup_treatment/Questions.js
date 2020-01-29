import React from 'react';
import {Container,Row,Col,UncontrolledCollapse,Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const questions = [
  {
    quest:"¿Hay garantía de safisfacción?",
    answer:"Completamente. Tienes hasta 30 días para asegurar la devolución de tu dinero."
  },
  {
    quest:"¿El diseño es personalizado?",
    answer:"Sí, es un servicio premium que entrega la mejor calidad de gráficos específicos y únicos."
  },
  {
    quest:"¿Necesito un dominio?",
    answer:"Es preferible, el servicio incluye un domino .mx disponible en caso de que no tengas uno."
  },
  {
    quest:"¿Tengo actualizaciones y soporte?",
    answer:"En efecto, tienes 60 días de soporte y actualizaciones gratuitas"
  },
  {
    quest:"¿Está hecho con un constructor de bloques?",
    answer:"No.  Nada de plantillas ni predefinidos, además usamos sólo la tecnología más reciente."
  },
  {
    quest:"Ya tengo una página, ¿Puedo integrarlo?",
    answer:"En efecto, si ya tienes una página, puedes agregar el landing en una ruta específica. por ej. 'www.sitio.com/landing-producto'"
  },
  {
    quest:"¿Me ayudan a medir el impacto?",
    answer:"Cada Landing está integrado con analítica de uso simple, para algo más específico no dudes en ponerte en contacto"
  },
  {
    quest:"¿Otra?",
    answer:"Contáctanos y con mucho gusto atenderemos tus dudas."
  }

]



function Questions (){
  let rows = []
  questions.map((el,i)=>{
    if(i%2===0){
      rows = rows.concat([questions.slice(i,i+2)])
    }
    return null
  })

  return(
    <Container className="faq_section sect_50" fluid>
      <Container className="text-light pb-5">
        {rows.slice(0,2).map((quest,i)=><Row key={i}>
            {quest.map(({quest,answer},o)=><Col xs={12} sm={6} key={o}>
              <Row className="mt-3">
                <Col xs={1}>
                  <FontAwesomeIcon className="" size="lg" icon="question-circle"/>
                </Col>
                <Col xs={11}>
                  <h5>
                    <b>{quest}</b>
                  </h5>
                  <p>
                    {answer}
                  </p>
                </Col>
              </Row>

            </Col>)}

        </Row>)}
        <Row className="text-center">
          <Col>
            <Button color="link" className="text-light" id="toggler">

              <FontAwesomeIcon icon="plus-circle"/>&nbsp; Mostrar más...
            </Button>
          </Col>
        </Row>
      <UncontrolledCollapse toggler="#toggler">
        {rows.slice(2,rows.length).map((quest,i)=><Row key={i}>
            {quest.map(({quest,answer},o)=><Col xs={12} sm={6} key={o}>
              <Row className="mt-3">
                <Col xs={1}>
                  <FontAwesomeIcon className="" size="lg" icon="question-circle"/>
                </Col>
                <Col xs={11}>
                  <h5>
                    <b>{quest}</b>
                  </h5>
                  <p>
                    {answer}
                  </p>
                </Col>
              </Row>

            </Col>)}

        </Row>)}
      </UncontrolledCollapse>

      </Container>
    </Container>
  )
}

export default Questions
