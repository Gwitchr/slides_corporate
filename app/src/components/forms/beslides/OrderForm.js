import React,{Component} from 'react';
import {Container,Row,Col,Form,ButtonGroup,Button,Progress} from 'reactstrap';
import {CSSTransition} from 'react-transition-group';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  SendButton,
  Range,
  InputSimple,
  InputOptions,
  CardChoices,
  WelcomeM
} from '../questTypes';
import {AnimSend} from '../../elements'
import {throttle} from '../../../utils';
import {THROTTLE_TIME,LOCAL_MESSAGES} from '../../../constants';
import '../../../style/utils.css';
import '../../../style/form.css';

import data from '../../../assets/bodym/sending.json'

import colorOptions from '../../../constants/colors';
import industryOptions from '../../../constants/industries'
import usageOptions from '../../../constants/usage'
import styleOptions from '../../../constants/styles'

const duration = 500
export default class OrderForm extends Component {
  constructor(props){
    super(props)
    this.state={
      allAnswers:false,
      progr:0,
      show:true,
      timeInpS:true,
      currentQ:0,
      showMessage:false,
      colors:[
        {val:'Rojo',img:colorOptions.red},
        {val:'Negro',img:colorOptions.black},
        {val:'Azul',img:colorOptions.blue},
        {val:'Verde',img:colorOptions.green},
        {val:'Naranja',img:colorOptions.orange},
        {val:'Morado',img:colorOptions.purple},
        {val:'Turquesa',img:colorOptions.turquoise},
        {val:'Violeta',img:colorOptions.violet},
        {val:'Amarillo',img:colorOptions.yellow},
      ],
      graphStyles:[
        {val:'3D',img:styleOptions.threeD},
        {val:'Abstracto',img:styleOptions.abstract},
        {val:'Minimalista',img:styleOptions.minimal},
        {val:'Femenino',img:styleOptions.femenine},
        {val:'Masculino',img:styleOptions.masculine},
        {val:'Juguetón',img:styleOptions.sweet},
        {val:'Corporativo',img:styleOptions.corporate},
        {val:'Retro/Vintage',img:styleOptions.retro},
        {val:'Natural/Eco',img:styleOptions.green},
        {val:'Geométrico',img:styleOptions.geometric},
        {val:'Plano',img:styleOptions.flat},
        {val:'Fotográfico',img:styleOptions.photo},
      ],
      industries:[
        {val:'Salud',img:industryOptions.health},
        {val:'Inmobiliario',img:industryOptions.realstate},
        {val:'Construcción',img:industryOptions.construction},
        {val:'Químicos',img:industryOptions.chemistry},
        {val:'Legal',img:industryOptions.legal},
        {val:'Comida',img:industryOptions.food},
        {val:'Educación',img:industryOptions.education},
        {val:'Automotriz',img:industryOptions.automotive},
        {val:'ONG',img:industryOptions.ngo},
        {val:'Tecnología',img:industryOptions.tech},
        {val:'Finanzas',img:industryOptions.finance},
        {val:'Publicidad',img:industryOptions.advertising},
        {val:'Profesional',img:industryOptions.professional},
        {val:'Agricultura',img:industryOptions.agriculture},

      ],
      usage:[
        {val:'Portafolio',img:usageOptions.industry},
        {val:'Personal',img:usageOptions.industry},
        {val:'Artista/Fotógrafo',img:usageOptions.industry},
        {val:'Startup',img:usageOptions.industry},
        {val:'Negocio',img:usageOptions.industry},
        {val:'Consultoría',img:usageOptions.industry},
        {val:'Fashion',img:usageOptions.industry},
        {val:'Producto',img:usageOptions.industry},
        {val:'Servicios',img:usageOptions.industry},
        {val:'Evento social',img:usageOptions.industry}
      ],
      // Questions

      email:'',
      name:'',
      telephone:'',
      company:'',
      about:'',
      chosen_colors:[],
      chosen_industry:[],
      chosen_styles:[],
      chosen_usage:[],
      main_goal:'',
      details:'',

      // possible Q
      possibleQ:[
        {
          required:false,
          elType: 'WelcomeM',
          message: 'Para crear tu orden, contesta por favor lo siguiente. Para empezar da click en "Siguiente"',
          small:"Puedes pasar a la siguiente pregunta presionando tab"
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
          regExp:/@/,
          valid:true,
          invalid:true,
          longQ:'Correo electrónico para ponernos en contacto',
          icon:'at',
          sizeSM:[4,8]
        },
        {
          required:true,
          label:'Nombre completo',
          type:'text',
          elType:'InputSimple',
          forL:'name',
          id:'name',
          name:'name',
          longQ:'Nombre completo',
          icon:'user-astronaut',
          sizeSM:[4,8]
        },
        {
          required:true,
          label:'Número de contacto',
          type:'text',
          elType:'InputSimple',
          forL:'telephone',
          id:'telephone',
          name:'telephone',
          valid:true,
          invalid:true,
          regExp:/^\d{10}$/,
          pattern:'[0-9]{10}',
          limit:10,
          longQ:'Teléfono a 10 dígitos p.ej. 1234567890',
          icon:'mobile',
          sizeSM:[4,8]
        },
        {
          required:true,
          label:'Nombre de la empresa',
          type:'text',
          elType:'InputSimple',
          forL:'company',
          id:'company',
          name:'company',
          longQ:'Tu negocio se llama...',
          icon:'space-shuttle',
          sizeSM:[4,8]
        },
        {
          required:true,
          label:'Cuéntanos más de tu empresa',
          type:'textarea',
          elType:'InputSimple',
          forL:'about',
          id:'about',
          name:'about',
          longQ:'De lo que hace, lo que vende, etc.',
          icon:'satellite',
          sizeSM:[4,8]
        },
        {
          required:true,
          elType:'CardChoices',
          title:'Escoge los colores de tu marca',
          name:'chosen_colors',
          kind:'el color',
          choicesName:'colors',
          icon:'palette',
          limit:2,
          cols:{xs:4,sm:2}
        },
        {
          required:true,
          elType:'CardChoices',
          title:'¿En qué industria te desempeñas?',
          name:'chosen_industry',
          kind:'la industria',
          choicesName:'industries',
          icon:'industry',
          limit:1,
          cols:{xs:4,sm:3}
        },
        {
          required:true,
          elType:'CardChoices',
          title:'Escoge un estilo gráfico',
          name:'chosen_styles',
          kind:'el estilo',
          choicesName:'graphStyles',
          icon:'palette',
          limit:2,
          cols:{xs:4,sm:3}
        },
        {
          required:true,
          elType:'CardChoices',
          title:'Uso para tu BeSlides',
          name:'chosen_usage',
          kind:'el uso',
          choicesName:'usage',
          icon:'meteor',
          limit:1,
          cols:{xs:4,sm:3}
        },
        {
          required:true,
          label:'Objetivo',
          type:'textarea',
          elType:'InputSimple',
          forL:'main_goal',
          id:'main_goal',
          name:'main_goal',
          longQ:'El objetivo principal del proyecto',
          icon:'meteor',
          sizeSM:[4,8]
        },
        {
          required:true,
          label:'Detalles',
          type:'textarea',
          elType:'InputSimple',
          forL:'details',
          id:'details',
          name:'details',
          longQ:'Detalles del proyecto que sean importantes',
          icon:'comments',
          sizeSM:[4,8]
        },
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
    const {possibleQ} = this.state
    if(process.env.REACT_APP_PREFILLED_DATA){
      this.setState({
        email:'casillasljaime@gmail.com',
        name:'Luis Casillas',
        telephone:'2222397697',
        // three_words:'Padre,Cool,Chido',
        company:'N12 Estudio',
        about:'Empresa de soluciones tecnológicas, marketing y diseño',
        chosen_colors:['Negro','Verde'],
        chosen_styles:['3D','Corporativo'],
        chosen_industry:['Tecnología'],
        chosen_usage:['Startup'],
        main_goal:'Objetivo principal es generar más ventas a través de nuestra plataforma electrónica',
        // example_refs:'google.com,land-book.com,becards.app',
        details:'El proyecto debe ser espectacular!',
        currentQ:possibleQ.length-1

      })
    }
  }
  componentDidUpdate=(prevProps,prevState,snapshot)=>{
    // const {isFetching} = this.props
    if(prevState.currentQ!==this.state.currentQ){
      this.setState({
        show:true
      },this.toggleShow)
    }
  }
  toggleShow=()=>{
    setTimeout(()=>{
      this.setState({
        show:!this.setState.show
      })
    }, duration)

  }
  addNewVal=(name,value)=>{
    const prevVals = this.state[name]
    const found = prevVals.find((el)=>el.val===value)
    if(!found){
      this.setState({
        [name]:[...prevVals,{val:value}]
      })
    }

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
  getCardVal=(name,val)=>{
    const {currentQ,possibleQ} = this.state
    const {limit} = possibleQ[currentQ]
    let prevVals = this.state[name]
    let newVals = []
    let found = prevVals.indexOf(val)
    if(found>-1){
      newVals = [...prevVals.slice(0,found),...prevVals.slice(found+1)]
    } else {
      if(prevVals.length<limit){
        newVals = [...prevVals,val]
      } else {
        newVals = [...prevVals]
      }
    }
    this.setState({
      [name]:newVals
    })
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
    if(e.key==='Tab'){
      throttle(this.changePossibleQ(true,e),THROTTLE_TIME)
    }
    // else if (e.key==='ArrowLeft'){
    //   this.changePossibleQ(false)
    // }
  }
  submitHandler=(e)=>{
    throttle(this.changePossibleQ(true,e),THROTTLE_TIME)
  }
  changePossibleQ=(d,e)=>{
    const {setToast} = this.props
    const {currentQ,possibleQ} = this.state
    const {regExp,name,required} = possibleQ[currentQ]
    if(e)e.preventDefault()
    let valid = true
    if(regExp){
      valid = new RegExp(regExp).test(this.state[name])
      if(!valid){
        setToast({
          error:true,
          text:LOCAL_MESSAGES.FORMAT_MISMATCH
        })
      }
    }
    if(required){
      if(this.state[name]===''){
        valid = false
        setToast({
          error:true,
          text:LOCAL_MESSAGES.NOT_EMPTY
        })
      }
      if(Array.isArray(this.state[name])){
        if(this.state[name].length===0){
           valid = false
           setToast({
             error:true,
             text:LOCAL_MESSAGES.ARRAY_EMPTY
           })
         }
      }
      // if()
    } else if(!required) {
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
    // const {history} = this.props
    this.setState({
      showMessage:true
    })
    this.props.cancelService()
    this.props.setPlanPreview()
  }
  startSend=()=>{
    const {plan,product_id} = this.props
    const {
      email,
      name,
      telephone,
      three_words,
      company,
      about,
      slogan,
      is_abstract,
      is_classic,
      is_friendly,
      is_luxury,
      is3D,
      chosen_colors,
      chosen_styles,
      chosen_industry,
      chosen_usage,
      main_goal,
      industry,
      example_refs,
      details,
    } = this.state
    const info = {
      email,
      name,
      telephone,
      three_words,
      company,
      about,
      slogan,
      is_abstract,
      is_classic,
      is_friendly,
      is_luxury,
      is3D,
      chosen_colors,
      chosen_styles,
      chosen_industry,
      chosen_usage,
      main_goal,
      industry,
      example_refs,
      details,
      plan,
      product:product_id
    }
    this.props.startOrder(info)
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
    const {name,elType,rango,limit,choicesName} = possibleQ[currentQ]
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
            limit={limit}
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
          {elType==='Range'
           &&<Range
             getValue={this.getValue}
             value={this.state[name]}
             currentQ={currentQ}
             rango={rango}
             charact={possibleQ[currentQ]}/>}
             {elType==='CardChoices'
            &&<CardChoices
               getValue={this.getCardVal}
               addNewVal={this.addNewVal}
               value={this.state[name]}
               info={possibleQ[currentQ]}
               choices={this.state[choicesName]}
              />}
          {elType==='WelcomeM'
          &&<WelcomeM
             info={possibleQ[currentQ]} />}


        </div>
       </CSSTransition>
    )
  }
  render(){
    const {isFetching} = this.props
    const {progr,possibleQ,currentQ,showMessage} = this.state
    return (
      <Container
          onKeyDown={this.keyHandler}
          autoFocus
          className="d-flex flex-column justify-content-center py-5 animated fadeInPlace">
          <Row className="my-4 mainQuestions align-items-center justify-content-center">
            <Col sm={isFetching&&8}>
              {isFetching
                ?<AnimSend
                  endAnim={this.endAnim}
                  data={data}/>
                :<Form onSubmit={this.submitHandler}>
                  {this.renderInputs()}
                </Form>}
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
                        <FontAwesomeIcon icon="chevron-left" />  Anterior
                      </Button>
                      {currentQ===possibleQ.length-1
                        ?<Button onClick={this.startSend}
                                  disabled={isFetching}
                                  color="primary"
                                  className="animated slideInRight">
                              Continuar <FontAwesomeIcon icon="rocket" />
                          </Button>
                          :<Button onClick={()=>this.changePossibleQ(true)}
                                  disabled={currentQ===possibleQ.length-1}
                                  color="primary"
                                  className="animated slideInRight">Siguiente <FontAwesomeIcon icon="chevron-right" />
                          </Button>
                      }
                  </ButtonGroup>
              }
            </Col>
          </Row>
          <Row>
            <Col>
              {isFetching
                ?null
                :<Progress value={progr}/>
              }
            </Col>
          </Row>
      </Container>
    )
  }
}
