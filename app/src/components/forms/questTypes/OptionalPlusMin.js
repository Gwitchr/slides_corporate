import React from 'react';
import {FormGroup,Label,Col,Input,FormText,InputGroup,InputGroupAddon,Button} from 'reactstrap';

export const OptionalPlusMin =(props)=> {
  const {
    charact:{
      sizeSM,
      forL,
      id,
      label,
      icon,
      name,
      min,
      longQ,
      questionText,
      plusIcon,
      nameIf
    },
    value,
    checked
  } = props
  return(<div>
      <FormGroup className="animated fadeInPlace" row>
               <Label xs={4} size="lg">
                 <i className={plusIcon}/>&nbsp;{questionText}
               </Label>
               <Col xs={8} className="my-2 d-flex justify-content-start">
                 <Label check className="switch">
                    <input type="checkbox" onChange={props.getValue} name={nameIf} checked={checked}/>
                    <span className="fas slider round"/>
                </Label>
               </Col>
       </FormGroup>
      {checked&&
        <FormGroup className="animated fadeInPlace" row>
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
                   type="number"
                   min={min}
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
          </FormGroup>}
    </div>)
}
