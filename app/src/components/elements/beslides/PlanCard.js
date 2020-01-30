import React from 'react';
import {
  Button,
  Badge,
  Card,
  CardImg,
  CardFooter,
  CardBody,
  CardText,
  CardTitle,
  Collapse,
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function PlanCard({
  setPlan,
  featVis,
  toggle,
  icon,
  features=[],
  hiddenFeatures=[],
  price,
  prevPrice,
  plan,
  id,
  product_id,
  status_message}){
  return(
    <Card className="card_pricing ">
      <div className="card_pric_cont_img">
        <CardImg src={icon}/>
      </div>
      <CardBody className="mt-3">
        <CardTitle tag="h3">
          <b>{plan}</b>
        </CardTitle>
        <CardText tag="div" className="text-left">
        {hiddenFeatures.length
          ? <div>
          <FontAwesomeIcon onClick={toggle} icon={`${featVis?'minus-circle':'plus-circle'}`} id="toggler"/>...
          <Collapse isOpen={featVis}>
            {hiddenFeatures.map((el,i)=><p className="mb-1" key={i}>
                <FontAwesomeIcon className="text-secondary" icon="rocket"/>&nbsp;{el}
              </p>)}
          </Collapse>
          </div>
          :null
        }
        {features.map((el,i)=><p className="mb-1" key={i}>
            <FontAwesomeIcon className="text-secondary" icon="rocket"/>&nbsp;{el}
          </p>)}

        </CardText>
        <CardTitle className="display-5 font-weight-bold" tag="h2">
          {prevPrice? <small>
            <del className="text-muted">{prevPrice}</del> <br/>
            <Badge className="my-2" color="primary" pill>{status_message}</Badge> <br/>
          </small> :null}
          {price}
        </CardTitle>
        <Button
          onClick={()=>setPlan({plan,product_id})}
          className="mb-2"
          color="primary" block>
          Elegir
        </Button>
      </CardBody>
      <CardFooter>
        <small>
          *Todos los precios están en pesos mexicanos (mxn) <br/>
          **Los precios ya incluyen IVA
        </small>
      </CardFooter>
    </Card>
  )
}

export default PlanCard
