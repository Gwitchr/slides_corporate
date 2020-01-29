import React,{Component} from 'react';
import {FormGroup,Label,Col,Input,FormFeedback,FormText} from 'reactstrap';

export default class InputOptions extends Component {
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
        icon,
        type,
        pattern,
        name,
        longQ,
        options
      },
      value,
    } = this.props
    return(
        <FormGroup row>
          <Label sm={sizeSM[0]} size="lg" for={forL} id={id} >
            <i className={`fas fa-${icon}`}/>&nbsp;
            {label}
          </Label>
            <Col xs={12} sm={sizeSM[1]}>

                <Input onChange={this.props.getValue}
                  className={'custom custom_select'}
                  value={value}
                  pattern={pattern?pattern:null}
                  id={id}
                  type={type}
                  autoFocus
                  required={required}
                  name={name}>
                    {options.map((el,i)=>(
                      <option key={i} value={el}>
                        {el}
                      </option>
                    ))}
                </Input>
                <FormFeedback className="animated fadeIn" valid>Súper</FormFeedback>
                <FormFeedback>Ingresa 10 dígitos</FormFeedback>
                <FormText>{longQ}</FormText>

            </Col>
        </FormGroup>

    )
  }
}
