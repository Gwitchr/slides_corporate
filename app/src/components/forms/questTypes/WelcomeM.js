import React from 'react';
import {FormGroup} from 'reactstrap';

export const WelcomeM =({info:{message,small}})=>{
  return(
    <FormGroup className="animated fadeInPlace text-center" row>
      <legend>
        {message}
        <br/>
        <small style={{fontSize:'10pt'}} className="text-muted">
          {small}
        </small>
      </legend>
    </FormGroup>
  )
}
