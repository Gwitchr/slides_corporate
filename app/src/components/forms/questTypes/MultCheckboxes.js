import React from 'react';
import {Row,Col,FormGroup,Label,Input} from 'reactstrap';

export const MultCheckboxes =(props)=> {
  const {
    charact:{
      required=[],
      forL,
      id,
      label,
      icon,
      type,
      name,
      title,
      sizeSM
    },
    value
  } = props
  return (
        <Row>
          <Col xs={12} sm={sizeSM[0]} >
            <h4><i className={icon}/> {title}</h4>
          </Col>
          <Col>
           {forL.map((el,i)=>(
             <FormGroup key={i} check inline>
               <Label  size="lg" for={forL[i]} check>
                   <Input onChange={props.getValue}
                   className="custom"
                   required={required[i]}
                   checked={value[i]}
                   id={id[i]}
                   type={type}
                   autoFocus
                   name={name[i]}/> {label[i]}</Label>
             </FormGroup>
           ))}
            {/* <FormGroup check inline>
              <Label  size="lg" for={forL[0]} id={id[0]} >
                  <Input onChange={props.getValue}
                  className="custom"
                  checked={value[0]}
                  id={`input_${currentQ}`}
                  type={type}
                  autoFocus
                  name={name[0]}/> {label[0]}</Label>
            </FormGroup>
            <FormGroup check inline>
              <Label  size="lg" for={forL[1]} id={id[1]} >
                  <Input onChange={props.getValue}
                  className="custom"
                  checked={value[1]}
                  id={`input_${currentQ}`}
                  type={type}
                  autoFocus
                  name={name[1]}/> {label[1]}</Label>
            </FormGroup>
            <FormGroup check inline>
              <Label  size="lg" for={forL[2]} id={id[2]} >
                  <Input onChange={props.getValue}
                  className='custom'
                  checked={value[2]}
                  id={`input_${currentQ}`}
                  type={type}
                  autoFocus
                  name={name[2]}/> {label[2]}</Label>
            </FormGroup> */}
          </Col>
        </Row>)
}
