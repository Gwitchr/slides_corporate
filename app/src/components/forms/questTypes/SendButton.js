import React from 'react';
import {FormGroup,Button} from 'reactstrap';

export const SendButton =({setSend,charact:{sizeSM,icon,label,textButton}})=> (
      <div>
        <FormGroup row>
                <Button color="primary" block onClick={setSend}>
                  {textButton} <i className="fas fa-paper-plane"/>
                </Button>
        </FormGroup>
      </div>
    )
