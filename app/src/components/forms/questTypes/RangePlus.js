import React,{Component} from 'react';
import {FormGroup,Label,Col,Input,FormFeedback,FormText, UncontrolledTooltip as UTooltip} from 'reactstrap';

export default class RangePlus extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    const {
      charact:{
        sizeSM,
        forL,
        id,
        label,
        icon,
        type,
        rango,
        pattern,
        name,
        longQ,
        ifPlusText,
        plusIcon,
        nameOption
      },
      value,
      plus,
      currentQ
    } = this.props
    return(<div>
      <FormGroup row>
        <Label sm={sizeSM[0]} size="lg" for={forL} id={id} >
          <i className={`fas fa-${icon}`}/> {label}</Label>
          <Col xs={12} sm={sizeSM[1]}>

              <Input onChange={this.props.getValue}
                className={type==='range'?'slider_range':'custom'}
                value={value}
                // valid={valid?this.props[name].length===10:this.props[name].length&&this.props[name]!==''}
                // invalid={invalid?this.props[name].length>10:this.props[name].length&&this.props[name]===''}
                pattern={pattern?pattern:null}
                id={`input_${currentQ}`}
                type={type}
                autoFocus
                min={rango&&rango[0]}
                max={rango&&rango[1]}
                name={name}/>
                {type==="range"&&
                <UTooltip placement="top"
                  target={`input_${currentQ}`}>
                  {value?value:<span>&nbsp;</span>}
                </UTooltip>
              }
              <FormFeedback className="animated fadeIn" valid>Súper</FormFeedback>
              <FormFeedback>Corrige</FormFeedback>
              <FormText>{longQ}</FormText>

          </Col>
      </FormGroup>
      {value>=rango[1]&&
        <FormGroup className="animated fadeInPlace" row>
                 <Label xs={4} size="lg" className="pt-2 d-flex align-items-center"><i className={plusIcon}/>&nbsp;{ifPlusText}</Label>
                 <Col xs={8} className="my-2 d-flex justify-content-start">
                   <Label check className="switch">
                      <input type="checkbox" onChange={this.props.getValue} name={nameOption} checked={plus}/>
                      <span className="fas slider round"/>
                  </Label>
                 </Col>
         </FormGroup>}
    </div>)
  }
}
