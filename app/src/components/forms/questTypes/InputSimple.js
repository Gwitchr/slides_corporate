import React,{Component} from 'react';
import {FormGroup,Label,Col,Input,FormFeedback,FormText} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class InputSimple extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    const {
      charact:{
        required,
        sizeSM,
        forL,
        id,
        label,
        valid,
        invalid,
        icon,
        type,
        rango,
        pattern,
        name,
        regExp,
        longQ,
        invalidM,
        limit=null,
        placeholder
      },
      value,
    } = this.props
    let testR = ''
    if(regExp){
      testR = new RegExp(regExp)
    }
    return(
        <FormGroup row>
          <Label sm={sizeSM[0]} size="lg" for={forL} id={id} >
            <FontAwesomeIcon icon={`${icon}`}/>&nbsp;
            {label}
          </Label>
            <Col xs={12} sm={sizeSM[1]}>

                <Input onChange={this.props.getValue}
                  className={type==='range'?'slider_range':'custom'}
                  value={value}
                  valid={valid&&value.length>0
                    ?testR.test(value)
                    :null
                  }
                  invalid={invalid&&value.length>=10
                    ?!testR.test(value)
                    :null
                  }
                  pattern={pattern?pattern:null}
                  id={id}
                  type={type}
                  autoFocus
                  maxLength={limit}
                  required={required}
                  min={rango&&rango[0]}
                  max={rango&&rango[1]}
                  placeholder={placeholder}
                  name={name}/>
                <FormFeedback className="animated fadeIn" valid>Súper</FormFeedback>
                <FormFeedback>{invalidM}</FormFeedback>
                <FormText>{longQ}</FormText>

            </Col>
        </FormGroup>

    )
  }
}
