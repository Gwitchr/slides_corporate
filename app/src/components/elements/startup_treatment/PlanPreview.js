import React from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardFooter
} from 'reactstrap';
import {Chart} from './'
import {SUT_GRAPH_LABELS} from '../../../constants/startup_treatment';
import {formatNmxn} from '../../../utils';
import station_pattern from '../../../assets/img/utils/patterns/station_pattern.svg'

const background={
  backgroundImage:`url(${station_pattern})`
}

function PlanPreview({
  plan,
  selProduct,
  order:{
    is_abstract,
    is_classic,
    is_friendly,
    is_luxury,
    is3D,
    name,
    email,
    telephone,
    threeWord,
    company,
    about,
    chosen_colors,
    chosen_styles,
    chosen_industry,
    chosen_usage,
    main_goal,
    example_refs,
    details,
    _id
  }}){
  let values = {
    is_abstract,
    is_classic,
    is_friendly,
    is_luxury,
    is3D
  }
  let data = [],labels = []
  Object.keys(values).map((el)=>{
    labels = labels.concat(SUT_GRAPH_LABELS[el])
    data = data.concat(values[el])
    return null
  })
  return(
        <Card className="preview_sut_order text-light animated fadeInPlace abs_cont">
          <div className="order_sut_bg" style={{...background,top:'20%'}}/>
          <CardBody>
            <Row className="text-center flex-column">
              <CardTitle tag="h3">
                  Resumen del pedido
              </CardTitle>
              <CardSubtitle>
                  {`Orden ${_id.slice(-6)}`}
              </CardSubtitle>
              <hr className="border-light"/>
            </Row>
            <Row className="justify-content-center text-center">
              <Col>
                <p>
                  Orden a nombre de
                  <br/> {name}
                  <br/>
                  datos de contacto: <br/>
                  <b>Mail:</b>&nbsp;{email} <br/>
                  <b>Teléfono:</b>&nbsp;{telephone} <br/>
                  <b>Empresa:</b>&nbsp;{company} <br/>

                </p>
              </Col>
            </Row>
            <Row className="no-gutters align-items-center mb-2">
              <Col xs={12} md={4}>
                {selProduct
                  ?<CardImg src={selProduct.main_image}/>
                  :null
                }
              </Col>
              <Col xs={12} md={8} >

                  <Row>
                    <Col xs={12} md={7}>
                      <p>Estilo gráfico escogido</p>
                      <Chart lightText data={data} labels={labels} />
                    </Col>
                    <Col xs={12} md={5}>
                      <small>
                        <b>Acerca de:</b>&nbsp;{about} <br/>
                        <b>Detalles:</b>&nbsp;{details} <br/>
                        <b>3 Palabras:</b>&nbsp;{threeWord} <br/>
                        <b>Colores:</b>&nbsp;{Array.isArray(chosen_colors)&&chosen_colors.join(', ')} <br/>
                        <b>Estilo:</b>&nbsp;{Array.isArray(chosen_styles)&&chosen_styles.join(', ')} <br/>
                        <b>Industria:</b>&nbsp;{Array.isArray(chosen_industry)&&chosen_industry.join(', ')} <br/>
                        <b>Enfoque:</b>&nbsp;{Array.isArray(chosen_usage)&&chosen_usage.join(', ')} <br/>
                        <b>Objetivo:</b>&nbsp;{main_goal} <br/>
                        <b>Referencias:</b>&nbsp;{example_refs} <br/>
                      </small>
                    </Col>



                  </Row>

              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <b>
              {`A pagar ${selProduct.offer_price
                ?formatNmxn(selProduct.offer_price)
                :formatNmxn(selProduct.price)} ${selProduct.currency_code}`}
            </b>
          </CardFooter>

        </Card>
  )
}

export default PlanPreview;
