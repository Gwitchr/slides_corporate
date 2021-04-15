import React,{Component} from 'react';
import {Input,FormGroup,InputGroup,InputGroupAddon,Button,Progress,FormText} from 'reactstrap';
import '../../style/utils.css'

export default class Subscribe extends Component{
  constructor(props){
    super(props)
    this.state={
      progr:0,
      email:''
    }
  }
  componentDidUpdate=(prevProps)=>{
    const {isPosting} = this.props
    const {isPosting:wasSendingMail} = prevProps
    if(!wasSendingMail&&isPosting){
      this.setState({
        progr:100
      })
    }
  }
  sendInfo=()=>{
    const {list} = this.props
    const {email} = this.state
    if(email!==''){
      this.props.postDataSubs({
        email,
        list
      })
      // setTimeout(()=>{
      //   this.props.resetSubscribe()
      // },5000)
    }
  }
  getValue=(e)=>{
    const { target:{ value,name }} = e
    this.setState({
      [name]:value
    })
  }
  render(){
    const { isPosting , message , isStacked , error, buttonColor, light} = this.props
    const { progr } = this.state
    return(
      <div>
        {isStacked
          ? <div>
            {
              isPosting
              ? <Progress value={progr} animated />
              : <FormGroup className="text-center">
                  <Input onChange={this.getValue} className={`custom ${light?'text-light':''}`} type="email" placeholder="Tu correo" name="email"/>
                      <Button onClick={this.sendInfo}
                              block
                              className="hvr_top mt-1"
                              color={buttonColor?buttonColor:''}>
                        Suscribirse <i className="fas fa-paper-plane"/>
                      </Button>
                </FormGroup>
            }
          </div>
          : <div>
            {
              isPosting
              ? <Progress value={progr} animated />
              : <InputGroup className="text-center">
                  <Input onChange={this.getValue} className={`custom ${light?'text-light':''}`} type="email" placeholder="Tu correo" name="email"/>
                    <InputGroupAddon addonType="append">
                      <Button onClick={this.sendInfo}
                              className="hvr_top"
                              color={buttonColor?buttonColor:''}>
                        Suscribirse <i className="fas fa-paper-plane"/>
                      </Button>
                    </InputGroupAddon>
                </InputGroup>
            }
          </div>
        }

        {
          message&&<FormText className="text-dark form-text">{message} <br/> Revise también su bandeja de correo no deseado </FormText>
        }
        {
          error&&<FormText className="text-dark form-text">{error}</FormText>
        }
      </div>
    )
  }
}
