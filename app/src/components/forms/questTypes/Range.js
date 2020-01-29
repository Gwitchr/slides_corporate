import React,{Component,Fragment} from 'react';
import {FormGroup,Label,Col,Input,FormText,UncontrolledTooltip as UTooltip} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
export default class Range extends Component {
  render(){
    const {
      charact:{
        required,
        sizeSM,
        forL,
        id,
        label,
        icon,
        rango,
        name,
        longQ,
        autoFocus
      },
      value
    } = this.props
    return(
      <Fragment>
        <FormGroup row>
          <Label sm={sizeSM[0]} size="lg" for={forL} id={id} >
            <FontAwesomeIcon icon={`${icon}`}/>&nbsp;
            {label}
          </Label>
            <Col xs={12} sm={sizeSM[1]}>

                <Input onChange={this.props.getValue}
                  className="slider_range"
                  value={value}
                  id={`input_${name}`}
                  type="range"
                  autoFocus={autoFocus?true:false}
                  required={required}
                  min={rango[0]}
                  max={rango[1]}
                  name={name}/>
                <FormText>{longQ}</FormText>
                <UTooltip placement="top"
                    target={`input_${name}`}>
                      {value}
                  </UTooltip>

            </Col>
            <Col xs={3} sm={2}>
              <Input onChange={this.props.getValue}
                     value={value}
                     className="custom"
                     type="number"
                     min={rango[0]}
                     max={rango[1]}
                     name={name} />
            </Col>
        </FormGroup>

      </Fragment>
    )
  }
}
