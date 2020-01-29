import React from 'react';
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardFooter
} from 'reactstrap';
// import {Chart} from './'
// import {SUT_GRAPH_LABELS} from '../../../constants/startup_treatment';
import {formatNmxn} from '../../../utils';
import station_pattern from '../../../assets/img/utils/patterns/station_pattern.svg'

const background={
  backgroundImage:`url(${station_pattern})`
}

function PlanPreview({
  // plan,
  selProduct,
  order:{
    name,
    email,
    telephone,
    company,
    about,
    chosen_colors,
    chosen_styles,
    chosen_industry,
    chosen_usage,
    main_goal,
    details,
    _id=''
  }}){
  return(
        <Card className="preview_sut_order text-light animated fadeInPlace abs_cont">
          <div className="order_sut_bg" style={{...background,top:'20%'}}/>
            {selProduct
              ?<CardImg src={selProduct.main_image}/>
              :null
            }

            <CardBody>
              <CardTitle tag="h3">
                  Resumen del pedido
              </CardTitle>
              <CardSubtitle>
                  {`Orden ${_id.slice(-6)}`}
              </CardSubtitle>
              <hr className="border-light"/>
              <CardText>
                Orden a nombre de
                <br/> {name}
                <br/>
                datos de contacto: <br/>
                <b>Mail:</b>&nbsp;{email} <br/>
                <b>Teléfono:</b>&nbsp;{telephone} <br/>
                <b>Empresa:</b>&nbsp;{company} <br/>
              </CardText>
            </CardBody>
            <CardBody>
              <small>
                <b>Acerca de:</b>&nbsp;{about} <br/>
                <b>Detalles:</b>&nbsp;{details} <br/>
                <b>Colores:</b>&nbsp;{Array.isArray(chosen_colors)&&chosen_colors.join(',')} <br/>
                <b>Estilo:</b>&nbsp;{Array.isArray(chosen_styles)&&chosen_styles.join(',')} <br/>
                <b>Industria:</b>&nbsp;{Array.isArray(chosen_industry)&&chosen_industry.join(',')} <br/>
                <b>Enfoque:</b>&nbsp;{Array.isArray(chosen_usage)&&chosen_usage.join(',')} <br/>
                <b>Objetivo:</b>&nbsp;{main_goal} <br/>
              </small>
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
