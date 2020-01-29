import React from 'react';
import {
  Button,
  Badge,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  UncontrolledCollapse
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {PayPalBtn} from '../'

function PlanCard({icon,features=[],hiddenFeatures=[],price,prevPrice,purchaseError,purchase,session_buy,isFetching,plan,id}){
  return(
    <Card className="card_pricing ">
      <div className="card_pric_cont_img">
        <CardImg src={icon}/>
      </div>
      <CardBody className="mt-3">

        <CardText tag="div" className="text-left">
        {features.map((el,i)=><p className="mb-1" key={i}>
            <FontAwesomeIcon className="text-secondary" icon="rocket"/>&nbsp;{el}
          </p>)}
        {hiddenFeatures.length
          ? <div>
          <FontAwesomeIcon icon="plus-circle" id="toggler"/>...
          <UncontrolledCollapse toggler="#toggler">
            {hiddenFeatures.map((el,i)=><p className="mb-1" key={i}>
                <FontAwesomeIcon className="text-secondary" icon="rocket"/>&nbsp;{el}
              </p>)}
          </UncontrolledCollapse>
          </div>
          :null
        }
        </CardText>
        <CardTitle className="display-5 font-weight-bold" tag="h2">
          {prevPrice? <small>
            <del className="text-muted">{prevPrice}</del> <br/>
            <Badge className="my-2" color="primary" pill>Tiempo limitado</Badge> <br/>
          </small> :null}
          {price} <br/> <small className="">/ IVA incluido</small>
        </CardTitle>
        <Button
          onClick={()=>session_buy({plan})}
          disabled={isFetching}
          className="mb-2"
          color="primary" block>
          Pagar
        </Button>
        {isFetching
          ? <FontAwesomeIcon spin icon="atom"/>
          :<PayPalBtn
            id={id}
            purchaseError={purchaseError}
            purchase={purchase}/>
        }
      </CardBody>
    </Card>
  )
}

export default PlanCard
