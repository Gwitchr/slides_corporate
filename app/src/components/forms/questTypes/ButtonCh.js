import React from 'react';
import {FormGroup,Label,Col,Button} from 'reactstrap';

export const ButtonCh =({getValue,value,charact:{sizeSM,forL,id,icon,label,options,name}})=> (
      <div>
        <FormGroup row>
          <Label sm={sizeSM[0]} size="lg" for={forL} id={id} >
            <i className={`fas fa-${icon}`}/> {label}</Label>
            <Col xs={12} sm={sizeSM[2]}>
                {options.map((el,i)=>
                  <Button
                    onClick={()=>getValue({target:{value:el,type:'',name:name}})}
                    block
                    active={value===el}
                    color="primary"
                    outline
                    key={i}>
                    {el}
                </Button>)}
            </Col>
        </FormGroup>
      </div>
    )
