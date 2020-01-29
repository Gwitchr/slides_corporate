import React from 'react';
import {InputGroup,InputGroupAddon,FormText,Input,Button,FormGroup,Col,Label} from 'reactstrap';

export const NumberPlusMin =(props)=>{
  const {
    charact:{
      sizeSM,
      forL,
      id,
      label,
      min,
      icon,
      name,
      longQ
    },
    value,
  } = props
  return(
      <FormGroup row>
        <Label sm={sizeSM[0]} size="lg" for={forL} id={id} >
          <i className={`fas fa-${icon}`}/>&nbsp;
          {label}
        </Label>
          <Col xs={12} sm={sizeSM[1]}>
            <InputGroup>
               <InputGroupAddon addonType="prepend">
                 <Button color="primary" onClick={()=>props.getValue({target:{value,type:'',name}},false,min)}>
                   <i className="fas fa-minus"/>
                 </Button>
               </InputGroupAddon>
               <Input
                 onChange={props.getValue}
                 value={value}
                 min={min}
                 type="number"
                 name={name} />
               <InputGroupAddon addonType="append">
                 <Button
                    color="primary"
                    onClick={()=>props.getValue({target:{value,type:'',name}},true,min)}>
                   <i className="fas fa-plus"/>
                 </Button>
               </InputGroupAddon>
            </InputGroup>
            <FormText>{longQ}</FormText>
          </Col>
        </FormGroup>

  )
}
