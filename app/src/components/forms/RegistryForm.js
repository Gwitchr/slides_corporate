import React,{Component} from 'react';
import {Container,Row,Col,Form,ButtonGroup,Button,Progress} from 'reactstrap';
import {CSSTransition} from 'react-transition-group';
import {SendButton,InputSimple,InputOptions,WelcomeM,MultCheckboxes} from '../forms/questTypes';
import {AnimSend} from '../elements'
import '../../style/utils.css';
import '../../style/form.css';

const duration = 500
export default class RegistryForm extends Component {
  constructor(props){
    super(props)
    this.state={
      allAnswers:false,
      progr:0,
      show:true,
      timeInpS:true,
      currentQ:0,
      showMessage:false,
      // Questions

      name:'',
      last:'',
      email:'',
      blancoplomo:false,
      efimero:false,
      claroscuro:false,
      utopia:false,
      azurita:false,
      extravaganza:false,
      // possible Q
      possibleQ:[
        {
          required:false,
          elType: 'WelcomeM',
          message: 'Gracias por registrar tu interés a los eventos, para empezar da click en "Siguiente"',
          small:"Puedes pasar a la siguiente pregunta presionando tab"
        },
        // {
        //   required:true,
        //   label: 'Persona física o moral',
        //   elType: 'ButtonCh',
        //   forL: 'tipoPersona',
        //   id: 'tipoPersona',
        //   name: 'tipoPersona',
        //   longQ: 'Eres empresa o individuo?',
        //   icon: 'users',
        //   sizeSM: [
        //     4, 8
        //   ],
        //   options: ['Moral', 'Física','Asociación Civil']
        // },
        // {
        //   label: '¿Cuántas facturas expides al mes?',
        //   elType: 'NumberPlusMin',
        //   forL: 'facturacion',
        //   id: 'facturacion',
        //   name: 'facturacion',
        //   longQ: 'Aproximadamente',
        //   min:1,
        //   icon: 'clock',
        //   sizeSM: [
        //     6, 6
        //   ],
        //   // ifPlusText: '50 o más',
        //   // plusIcon: 'fas fa-plus-square',
        //   // nameOption: 'plus50'
        // }, {
        //   label: '¿Cuántos trabajadores?',
        //   elType: 'OptionalPlusMin',
        //   type: 'range',
        //   forL: 'seguridad',
        //   id: 'seguridad',
        //   name: 'seguridad',
        //   longQ: 'Exactamente',
        //   min:1,
        //   rango: [
        //     1, 50
        //   ],
        //   icon: 'clock',
        //   sizeSM: [
        //     4, 8
        //   ],
        //   questionText: '¿Necesitas seguridad social?',
        //   plusIcon: 'fas fa-plus-square',
        //   nameIf: "segReq"
        // }, {
        //   required:[false,false,false],
        //   title:'¿Necesitas servicios adicionales?',
        //   label:['Licitaciones','Trámite de licencias','Cursos'],
        //   elType:'MultCheckboxes',
        //   type:'checkbox',
        //   forL:['licitacion','licencias','cursos'],
        //   id:['licitacion','licencias','cursos'],
        //   name:['licitacion','licencias','cursos'],
        //   icon:'fas fa-plus-square',
        //   sizeSM:[4]
        // },
        {
          required:true,
          label:'Nombre',
          type:'text',
          elType:'InputSimple',
          forL:'name',
          id:'name',
          name:'name',
          longQ:'Sólo nombre sin apellido',
          icon:'user',
          sizeSM:[4,8]
        }, {
          required:false,
          label:'Apellidos',
          type:'text',
          elType:'InputSimple',
          forL:'last',
          id:'last',
          name:'last',
          longQ:'Sólo apellidos',
          icon:'user',
          sizeSM:[4,8]
        },
        {
          required:true,
          label:'Mail',
          type:'email',
          elType:'InputSimple',
          forL:'email',
          id:'email',
          name:'email',
          invalidM:'Ingresa un correo válido',
          //eslint-disable-next-line
          regExp:/^([\w-\.]+@([\w-]+\.)+[\w-]{1,10})?$/,
          valid:true,
          invalid:true,
          longQ:'Correo electrónico',
          icon:'at',
          sizeSM:[4,8]
        },
        {
          required:[false,false,false],
          title:'¿En qué estás interesado a asistir?',
          label:['Conferencias','Conversatorios','Workshops'],
          elType:'MultCheckboxes',
          type:'checkbox',
          forL:['blancoplomo','efimero','claroscuro'],
          id:['blancoplomo','efimero','claroscuro'],
          name:['blancoplomo','efimero','claroscuro'],
          icon:'fas fa-plus-square',
          sizeSM:[4]
        },
        {
          required:[false,false,false],
          title:'¿En qué estás interesado a asistir?',
          label:['Mercado Creativo','Muestra cine','Fiesta'],
          elType:'MultCheckboxes',
          type:'checkbox',
          forL:['utopia','azurita','extravaganza'],
          id:['utopia','azurita','extravaganza'],
          name:['utopia','azurita','extravaganza'],
          icon:'fas fa-plus-square',
          sizeSM:[4]
        },
        // {
        //   label:'¿Otros servicios adicionales?',
        //   elType:'InputSimple',
        //   type:'text',
        //   forL:'otrosServ',
        //   id:'otrosServ',
        //   name:'otrosServ',
        //   longQ:'Servicios adicionales separados con coma',
        //   icon:'fas fa-plus-square',
        //   sizeSM:[4,8]
        // },


        // {
        //   label:'Área de interés',
        //   type:'select',
        //   elType:'InputOptions',
        //   forL:'interes',
        //   id:'interes',
        //   name:'interes',
        //   longQ:'Selecciona el área',
        //   icon:'at',
        //   sizeSM:[4,8],
        //   options:[
        //     'Preparatoria',
        //     'Lic. en Podología',
        //     'Lic. en Derecho',
        //     'Lic. en Admón de empresas',
        //     'Lic. en Contaduria Pública',
        //     'Maestría',
        //   ]
        // },
        // {
        //   required:true,
        //   label:'Número de contacto',
        //   type:'text',
        //   elType:'InputSimple',
        //   forL:'telephone',
        //   id:'telephone',
        //   name:'telephone',
        //   valid:true,
        //   invalid:true,
        //   regExp:/^\d{10}$/,
        //   pattern:'[0-9]{10}',
        //   longQ:'Teléfono a 10 dígitos p.ej. 1234567890',
        //   icon:'phone',sizeSM:[4,8]
        // },
        // {
        //   label:'Comentarios',
        //   type:'textarea',
        //   elType:'InputSimple',
        //   forL:'comments',
        //   id:'comments',
        //   name:'comments',
        //   longQ:'Comentarios',
        //   icon:'comments',
        //   sizeSM:[4,8]
        // },
        // {
        //   elType:'SendButton',
        //   textButton:'Enviar',
        //   sizeSM:[4,8]
        // }
        // {
        //   label:'Empresa o nombre comercial',
        //   type:'text',
        //   elType:'InputSimple',
        //   forL:'empresa',
        //   id:'empresa',
        //   name:'empresa',
        //   longQ:'Sólo si aplica',
        //   icon:'building',
        //   sizeSM:[4,8]
        //   }, {
        //   elType:'SummaryEl',
        //   title:'Tus datos'
        //   }
      ]
    }
  }
  componentDidMount=()=>{
    // this.switcher = setInterval(()=>{
    //   this.setState({
    //     show:!this.state.show
    //   })
    // }, 1200)
    // if(process.env.REACT_APP_PREFILLED_DATA){
    //   this.setState({
    //     nombre:'Luis',
    //     apellidos:'Casillas',
    //     tel:'2222397697',
    //     mail:'luiscasillas@n12.mx',
    //     adminMail:'luiscasillas@n12.mx',
    //     currentQ:12
    //
    //   })
    // }
  }
  componentDidUpdate=(prevProps,prevState,snapshot)=>{
    const {isPosting} = this.props
    if(prevState.currentQ!==this.state.currentQ){
      this.setState({
        show:true
      },this.toggleShow)
    }
    if(!isPosting&&prevProps.isPosting){
      this.setState({
        name:'',
        last:'',
        email:'',
        blancoplomo:false,
        efimero:false,
        claroscuro:false,
        utopia:false,
        azurita:false,
        extravaganza:false,
        currentQ:0
      })
    }
    // if(prevProps.today_format!==this.props.today_format){
    //   const {possibleQ} = this.state
    //   let rango=[`${this.props.today_format}`,'']
    //   let newPQ = [...possibleQ.slice(0,2),{...possibleQ[2],rango},...possibleQ.slice(3)]
    //   this.setState({
    //     possibleQ:newPQ
    //   })
    // }
  }
  componentWillUnmount=()=>{
    // clearTimeout(this.switcher)
  }
  toggleShow=()=>{
    setTimeout(()=>{
      this.setState({
        show:!this.setState.show
      })
    }, duration)

  }
  getValue=(e,add,min)=>{
    const target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if(add===true){
      value = value + 1
    } else if (add===false){
      value = value - 1
      if(min && value <= (min-1)) value = min
    }
    this.setState({
      [name]: value
    });
  }
  setProgress=()=>{
    const {currentQ,possibleQ} = this.state
    let progr = ((currentQ)*100)/(possibleQ.length-1)
    if(currentQ===0) progr=0
    if(currentQ===possibleQ.length) progr=100
    this.setState({
      progr
    })
  }
  keyHandler=(e)=>{
    if(e.key==='Tab'||e.key==='Enter'){
      this.changePossibleQ(true,e)
    }
    // else if (e.key==='ArrowLeft'){
    //   this.changePossibleQ(false)
    // }
  }
  changePossibleQ=(d,e)=>{
    const {currentQ,possibleQ} = this.state
    const {regExp} = possibleQ[currentQ]
    if(e)e.preventDefault()
    let valid = true
    if(regExp){
      valid = new RegExp(regExp).test(this.state[possibleQ[currentQ].name])
    }
    if(possibleQ[currentQ].required
      &&this.state[possibleQ[currentQ].name]===''){
      valid = false
    } else if(!possibleQ[currentQ].required) {
      valid = true
    }

    let index = currentQ
    if(d&&valid){
      if(index!==possibleQ.length-1){
        index++
        this.setState({
          currentQ:index,
          show:!this.state.show
        },this.setProgress)
      }

    } else if (!d) {
      if(index===0)index=possibleQ.length
      index--
      this.setState({
        currentQ:index,
        show:!this.state.show
      },this.setProgress)
    }
  }
  setPossibleQ=(x)=>{
    this.setState({
      currentQ:x,
      show:!this.state.show
    })
  }
  // renderQuestions=()=>{
  //   const {possibleQ,currentQ,show} = this.state,
  //         {longQ} = possibleQ[currentQ]
  //   return(
  //     <CSSTransition classNames="question"
  //                    key={currentQ}
  //                    in={show}
  //                    onExited={this.toggleShow}
  //                    unmountOnExit
  //                    timeout={300}>
  //       <h3 className="mainQ">{longQ}</h3>
  //      </CSSTransition>
  //   )
  // }
  endAnim=()=>{
    const {history} = this.props
    this.setState({
      showMessage:true
    })
    this.props.cancel_registry()
    setTimeout(()=>history.push('/'),5000)
  }
  startSend=()=>{
    const {match:{params:{interest}}} = this.props
    const {
      name,
      last,
      email,
      blancoplomo,
      efimero,
      claroscuro,
      utopia,
      azurita,
      extravaganza
    } = this.state
    const info = {
      name:name.trim(),
      last:last.trim(),
      email,
      interest:{
        blancoplomo,
        efimero,
        claroscuro,
        utopia,
        azurita,
        extravaganza,
        interest
      }
    }
    this.props.start_registry(info)
  }
  renderProgress=()=>{
    const {possibleQ,currentQ} = this.state
    const progrQ = possibleQ.slice(0,currentQ)
    let progrV = 100/possibleQ.length
    return(
      <Progress multi>
         {progrQ.map((el,i)=>
            <Progress value={progrV} bar>
              {this.state[el.name]}
            </Progress>
         )}
      </Progress>
    )
  }
  renderInputs=()=>{
    const {possibleQ,currentQ,show} = this.state
    const {name,elType,rango} = possibleQ[currentQ]
    return(
      <CSSTransition classNames="question"
                     key={currentQ}
                     in={show}
                     onExited={this.toggleShow}
                     unmountOnExit
                     timeout={duration}>
        <div>



          {elType==='InputSimple'
          &&<InputSimple
            getValue={this.getValue}
            value={this.state[name]}
            currentQ={currentQ}
            rango={rango}
            charact={possibleQ[currentQ]}/>}
          {elType==='SendButton'
          &&<SendButton
            setSend={this.startSend}
            charact={possibleQ[currentQ]}/>}
          {elType==='InputOptions'
          &&<InputOptions
            getValue={this.getValue}
            value={this.state[name]}
            currentQ={currentQ}
            rango={rango}
            charact={possibleQ[currentQ]}/>}
          {elType==='MultCheckboxes'
            &&<MultCheckboxes
              getValue={this.getValue}
              value={[this.state[name[0]],this.state[name[1]],this.state[name[2]]]}
              currentQ={currentQ}
              rango={rango}
              charact={possibleQ[currentQ]}/>}
          {elType==='WelcomeM'
          &&<WelcomeM
             info={possibleQ[currentQ]} />}


        </div>
       </CSSTransition>
    )
  }
  render(){
    const {isPosting,message,error} = this.props
    const {progr,possibleQ,currentQ,showMessage} = this.state
    return (
      <Container onKeyUp={this.keyHandler} autoFocus className="d-flex flex-column justify-content-center py-5">
          <Row className="my-4 mainQuestions align-items-center justify-content-center">
          <Col sm={isPosting&&4}>
              {!isPosting&&(!message||!error)
                ?<Form onSubmit={(event)=>this.changePossibleQ(true,event)}>
                  {this.renderInputs()}
                </Form>
                :null
              }
              {showMessage
                ?<h3>
                  {message&&message.toString()}
                  {error&&error.toString()}
                </h3>
                :null
              }
              {isPosting&&<AnimSend endAnim={this.endAnim}/>}
        </Col>
          </Row>
          <Row className="my-4">
            <Col className="d-flex justify-content-center">
              {showMessage
                ?  null
                :  <ButtonGroup>
                      <Button onClick={()=>this.changePossibleQ(false)}
                        disabled={currentQ===0}
                        color="primary"
                        className="animated slideInLeft">
                        <i className="fas fa-chevron-left"/> Anterior
                      </Button>
                      {currentQ===possibleQ.length-1
                        ?<Button onClick={this.startSend}
                                  color="primary"
                                  className="animated slideInRight">
                              Enviar <i className="fas fa-paper-plane"/>
                          </Button>
                          :<Button onClick={()=>this.changePossibleQ(true)}
                                  disabled={currentQ===possibleQ.length-1}
                                  color="primary"
                                  className="animated slideInRight">Siguiente <i className="fas fa-chevron-right"/>
                          </Button>
                      }
                  </ButtonGroup>
              }
            </Col>
          </Row>
          <Row>
            <Col>
              <Progress value={progr}/>
            </Col>
          </Row>
      </Container>
    )
  }
}
