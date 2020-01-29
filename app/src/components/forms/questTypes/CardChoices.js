import React,{useState} from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Col,
  Input,
  Row
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const CardChoices =({
  choices,
  info:{name,title,icon,limit,cols=3,choicesName,kind=''},
  getValue,
  addNewVal,
  addValArray,
  value
})=>{
  const [addNew,setAddNew] = useState(false)
  const [val,setVal] = useState(false)
  const toggleAdd=()=>{
    setAddNew(!addNew)
  }
  const handleAddVal=()=>{
    addNewVal(choicesName,val)
  }
  const getLocalValue=(e)=>{
    setVal(e.target.value)
  }
  return(
    <Col>
      <h3>
      <FontAwesomeIcon icon={icon}/>&nbsp;{title}
      <br/>
      {limit
        ?<small className="text-muted">
          {`Escoge máximo ${limit}`}
         </small>
        :null
      }
      </h3>
      <br/>
      <Row>
        {choices.map(({val,img},i)=>(
          <Col key={i} xs={cols.xs} sm={cols.sm}>
            <Card
              onClick={()=>getValue(name,val)}
              className={`mb-2 selectable ${(value.indexOf(val)>-1)?'text-light':'text-dark'}`}
              outline={(value.indexOf(val)>-1)?false:true}
              color="secondary">
              {img
                ?<>
                  <CardImg src={img}/>
                  <CardBody>
                    <CardTitle className="text-center">
                      {val}
                    </CardTitle>
                  </CardBody>
                 </>
                :<CardBody>
                  <CardTitle>
                    {val}
                  </CardTitle>

                </CardBody>}



            </Card>
          </Col>
        ))}
        <Col xs={cols.xs} sm={cols.sm}>
          <Card>
            <CardBody>
              <CardTitle>
                {`¿No está ${kind} que buscas?`}
              </CardTitle>
              <br/>
              {addNew
                ? <div>
                  <Input onChange={getLocalValue} name="val" id={`${val}_val`} placeholder="Valor nuevo" />
                  <Button onClick={handleAddVal} className="mt-2" block color="primary">
                    Añadir
                  </Button>
                </div>
                : <Button color="info" onClick={toggleAdd}>
                    Agrégalo
                  </Button>
              }

            </CardBody>
          </Card>
        </Col>
      </Row>
    </Col>
  )
}
