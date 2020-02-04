import React,{useState,useRef,useEffect} from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import {Container,Row,Col,Collapse,Button,ButtonGroup} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {motion} from 'framer-motion';
import {SEO} from '../elements';
import {
  SlideMenu,
  Promos,
  // PlayMenu
} from '../pieces';
import {
  PaymentHandlerCont
} from '../../containers/beslides';
import {ContactCont} from '../../containers';
import {First,AnimSlide,ChartSlide,Last,Clients,Map} from '../elements/beslides';
import {MenuToggle} from '../elements';
import {
  TRANS_TIMEOUT,
  THROTTLE_SLIDES,
  MOBILE_BREAKPOINT,
  // DELAY_SLIDES
} from '../../constants/beslides'
// import animIntro from '../../assets/bodym/sending.json'
// import tools from '../../assets/bodym/services/beslides/tools.json'
import '../../style/beslides.css';

function BeSlides({match:{path,url},history,location:{hash},beslides,info_beslides}){
  const changer = useRef()
  const throttle = useRef()
  // const imageRef = useRef()
  const [isSmall,setIsSmall] = useState(false)
  const [currSlide,setCurrSlide] = useState(0)
  const [direction,setDirection] = useState(false)
  const [collapse,setCollapse] = useState(false)
  const [canChange,setCanChange] = useState(true)
  const [autoPlay,setAutoPlay] = useState(true)

  const [slide,slideIn] = useState(false)
  const [payment,setPayment] = useState(false)

  const {
    intro,
    data,
    colSize,
    graphs,
    // delay,
    identifier
  } = beslides[currSlide]

  // console.log('beslides[currSlide]',beslides[currSlide])

  const toggleMenu=(flag)=>{
    setPayment(flag)
    slideIn(!slide)
  }
  useEffect(()=>{
    if(window.innerWidth<=MOBILE_BREAKPOINT){
      setIsSmall(true)
    }
    return ()=>clearTimeout(throttle.current)
    // eslint-disable-next-line
  },[])
  const changeSlide=(dir,direct)=>{
    let nextPage = dir?currSlide+1:currSlide-1
    if(nextPage<0) nextPage = (beslides.length-1)
    if(nextPage>(beslides.length-1)) nextPage = currSlide
    // console.log('nextPage',nextPage,delay,beslides[currSlide])
    direct?setCurrSlide(nextPage):throttledChange(nextPage)
  }
  const autoChange=(delayDef)=>{
    if(!isSmall){
      clearTimeout(changer.current)
      changer.current=setTimeout(()=>{
        changeSlide(true,true)
    },delayDef)

    }
    return ()=>clearTimeout(changer.current)
  }
  useEffect(()=>{
    if(autoPlay){
      autoChange(beslides[currSlide].delay)
    } else {
      clearTimeout(changer.current)
    }
    if(identifier){
      setURLIdentifier()
    }
    // eslint-disable-next-line
  },[currSlide,beslides,autoPlay])
  useEffect(()=>{
      setSlideMatch()
    // eslint-disable-next-line
  },[beslides])
  const resetSlides=()=>{
    goToHandler(0)
  }
  const setURLIdentifier=()=>{
    history.push(`${url}#${identifier}`)
  }
  const throttledChange=(nextPage)=>{
    if(canChange){
      setCurrSlide(nextPage)
      setCanChange(false)
      throttle.current = setTimeout(()=>setCanChange(true),THROTTLE_SLIDES)
    }
  }
  const setSlideMatch=()=>{
    if(hash){
      const found = beslides.find((slide,i)=>slide.identifier===hash.split('#')[1])
      const index = beslides.indexOf(found)
      if(index>-1) {
        goToHandler(index)
      }
    }
  }
  const goToHandler=(num)=>{
    setCurrSlide(num)
  }

  const keyHandler=(e)=>{
    if(e.key==='ArrowLeft'||e.key==='ArrowRight'){
      let dir = false
      if(e.key==='ArrowRight') dir = true
      changeHandler(dir)
    }
  }
  const changeHandler=async(dir)=>{
    await setDirection(dir)
    await changeSlide(dir)
    if(collapse)toggleExpand()
  }
  const toggleAutoPlay=()=>{
    setAutoPlay(!autoPlay)
  }
  const toggleExpand=()=>{
    setCollapse(!collapse)
  }
  return(
    <>
      <SEO title={info_beslides.name} description="Compartir información de una manera profesional y efectiva"/>
      <SlideMenu className="" slideMenu={slide} toggleMenu={toggleMenu}>
        {payment
          ?<PaymentHandlerCont visible={slide}/>
          :<ContactCont/>
        }

      </SlideMenu>
      {/* <PlayMenu/> */}
      <Promos/>
      {info_beslides._id
        ?  <Container
              onKeyUp={keyHandler}
              tabIndex="0"
              autoFocus
              tag='main'
              className={`p-0 cont_beslides ${slide?'blurred':''}`} fluid>
              <Row className={`d-none d-sm-flex ${intro?'justify-content-center':''}`}>
                <Col xs={intro?colSize:4} className={`info_cont ${intro?'':'bg-light'} p-5 d-flex flex-column justify-content-center align-items-center `}>
                  {data.title
                    ? <Row className="px-0 my-auto w-100">
                          <Col className="">
                            <TransitionGroup
                            appear={true}
                            exit={false}>
                              <CSSTransition
                                key={data.title}
                                 timeout={TRANS_TIMEOUT}
                                 classNames={`slide_data`}
                                 appear>
                                   <div>
                                     <h2 className="animated fadeInPlace display-4">
                                       {data.title}
                                     </h2>
                                     <h3 className="text-muted animated fadeInPlace mt-3">
                                       {data.subtitle}
                                     </h3>
                                   </div>
                                 </CSSTransition>
                              <CSSTransition
                                key={data.description}
                                 timeout={TRANS_TIMEOUT+200}
                                 classNames={`slide_data`}
                                 appear>
                                   <>
                                     <p className="multiline mt-1 animated fadeInPlace">
                                       {data.description}
                                     </p> <br/>
                                     {data.additional_info&&data.additional_info.link&&
                                     <a target="_blank" rel="noopener noreferrer" href={data.additional_info.link}>{data.additional_info.text}&nbsp;<FontAwesomeIcon icon="external-link-alt"/></a>}
                                   </>

                              </CSSTransition>
                          </TransitionGroup>
                          {data.nested&&data.nested.title&&<>
                            <div onClick={toggleExpand}>
                                <MenuToggle
                                hasPulse={data.nested&&data.nested.hasPulse}
                                collapse={collapse}/>
                              &nbsp;
                              <b>
                                {data.nested.title}
                              </b>
                            </div>
                            <hr/>
                            <div>
                              <Collapse isOpen={collapse} className="multiline" >
                                  {data.nested.type==='list'
                                    ? <ul>
                                      {data.nested.points.map((el,i)=><li key={i}>
                                          {el.text
                                            ?<a target="_blank" rel="noopener noreferrer" href={el.link}>{el.text}&nbsp;<FontAwesomeIcon icon="external-link-alt"/></a>
                                            :<>{el}</>
                                          }
                                        </li>
                                      )}
                                    </ul>
                                    : <Col className={`${data.nested.className?data.nested.className:''}`} tag={data.nested.tag?data.nested.tag:'p'}>
                                      {data.nested.info}
                                    </Col>
                                  }
                              </Collapse>
                            </div>
                          </>}
                        </Col>
                      </Row>
                    : intro
                    ? intro.first
                    ? <First
                      title={info_beslides.title}
                      company={info_beslides.customer.company}
                     logo={intro&&intro.logo}/>
                    : <Last
                      toggle={toggleMenu}
                      reset={resetSlides}
                      companyData={intro&&intro.companyData}
                      cardImg={intro&&intro.card_img}/>
                    : null
                  }

                  {
                    !intro&&<Row className="w-100">
                      <Col className="d-flex justify-content-between mt-auto mb-4">

                        &nbsp;
                        <div>
                          <ButtonGroup className="text-dark">
                            <Button
                              onClick={()=>changeHandler(false)}
                              outline className="d-flex align-items-center">
                              <FontAwesomeIcon
                                size="lg" icon="chevron-left"/>
                            </Button>
                            {/* <Button outline className="d-flex align-items-center">
                              <FontAwesomeIcon size="lg" icon={['far','play-circle']}/>
                            </Button> */}
                            <Button outline>
                              {` ${currSlide} de ${beslides.length-1} `}
                            </Button>
                            <Button onClick={toggleAutoPlay} outline className="d-flex align-items-center">
                              <FontAwesomeIcon size="lg" icon={autoPlay?['far','pause-circle']:['far','play-circle']}/>
                            </Button>

                            <Button
                              onClick={()=>changeHandler(true)}
                               outline className="d-flex align-items-center">
                              <FontAwesomeIcon
                                size="lg"
                                icon="chevron-right"/>
                            </Button>
                          </ButtonGroup>
                        </div>
                        &nbsp;

                      </Col>
                    </Row>
                  }
                  {(currSlide+1===beslides.length)&&<Row className="w-100">
                    <Col className="d-flex justify-content-between mt-auto mb-4">
                      <Button
                        onClick={()=>changeHandler(false)}
                        outline className="car_prev d-flex align-items-center">
                        <FontAwesomeIcon
                          size="lg" icon="chevron-left"/>
                      </Button>
                    </Col>
                  </Row>}
                </Col>
                {graphs
                  ?<Col xs={8} className="px-0 graph_cont animated fadeInPlace">
                        <TransitionGroup
                          appear={true}
                          exit={true}>
                          <CSSTransition
                            key={currSlide}
                             timeout={TRANS_TIMEOUT}
                             classNames={`beslide_graph_${direction?'right':'left'}`}
                             appear>
                              <div className="graph_wrapper d-flex flex-column justify-content-center align-items-center px-5">
                                {graphs.animated
                                  ?<AnimSlide className="graph_img_anim" {...graphs.config} data={graphs.animated} />
                                  :graphs.chart
                                  ? <ChartSlide className="animated fadeInPlace" config={graphs.chart} />
                                  :graphs.custom
                                  ?<div className="">
                                    {graphs.custom.clients
                                      ?<Clients isSmall={isSmall} {...graphs.custom.clients}/>
                                      :graphs.custom.map
                                      ?<Map {...graphs.custom.map}/>
                                      :null
                                    }
                                    {
                                    }
                                  </div>
                                  :<img className="img-fluid
                                      graph_img_anim" src={graphs.static} alt=""/>
                                }
                              </div>
                            </CSSTransition>
                        </TransitionGroup>
                </Col>
                :null}
              </Row>
              {/* Mobile version -------------------------------------- */}
              {isSmall&&beslides.length
                ? <>
                  {beslides.map((slide,i)=><Row className="d-flex d-sm-none" id={slide.identifier||'intro'} key={i}>
                    {slide.graphs
                      ?<Col xs={12} className="graph_cont animated fadeInPlace">
                          <div className="graph_wrapper d-flex flex-column justify-content-center align-items-center">
                            {slide.graphs.animated
                              ?<AnimSlide className="graph_img_anim"
                                  small
                                 {...slide.graphs.animated.config} data={slide.graphs.animated} />
                              :slide.graphs.chart
                              ? <ChartSlide className="animated fadeInPlace" small config={slide.graphs.chart} />
                              :slide.graphs.custom
                              ?<div>
                                {slide.graphs.custom.clients
                                  ?<Clients isSmall={isSmall} {...slide.graphs.custom.clients}/>
                                  :slide.graphs.custom.map
                                  ?<Map {...slide.graphs.custom.map}/>
                                  :null
                                }

                              </div>
                              :<img className="img-fluid
                                  graph_img_anim" src={slide.graphs.static} alt=""/>
                            }
                          </div>
                    </Col>
                    :null}
                    <Col xs={12} className={`info_cont px-5 ${intro?'':'bg-light'} d-flex flex-column justify-content-center align-items-center `}>
                      {slide.data.title
                        ? <Row className="my-auto row_data">
                              <Col className="px-0 py-5">

                                       <div>
                                         <h2 className="animated fadeInPlace display-4">
                                           {slide.data.title}
                                         </h2>
                                         <h3 className="text-muted animated fadeInPlace mt-3">
                                           {slide.data.subtitle}
                                         </h3>
                                       </div>

                                         <p className="multiline mt-1 animated fadeInPlace">
                                           {slide.data.description}
                                         </p> <br/>
                                         {slide.data.additional_info&&slide.data.additional_info.link&&
                                         <a target="_blank" rel="noopener noreferrer" href={slide.data.additional_info.link}>{slide.data.additional_info.text}&nbsp;<FontAwesomeIcon icon="external-link-alt"/></a>}


                              {slide.data.nested&&slide.data.nested.title&&<>
                                <div>
                                  <MenuToggle
                                    hasPulse={slide.data.nested&&slide.data.nested.hasPulse}
                                    collapse={collapse}/>
                                    <b>
                                      {slide.data.nested.title}
                                    </b>
                                </div>
                                <hr/>
                                <div>
                                  <Collapse isOpen={collapse} className="multiline" >
                                    {slide.data.nested&&slide.data.nested.type==='list'
                                      ? <ul>
                                        {slide.data.nested.points.map((el,i)=><li key={i}>
                                            {el.text
                                              ?<a target="_blank" rel="noopener noreferrer" href={el.link}>{el.text}&nbsp;<FontAwesomeIcon icon="external-link-alt"/></a>
                                              :<>{el}</>
                                            }
                                          </li>
                                        )}
                                      </ul>
                                      : <Col className={`${slide.data.nested.className?slide.data.nested.className:''}`} tag={slide.data.nested.tag?slide.data.nested.tag:'p'}>
                                        {slide.data.nested.info}
                                      </Col>
                                    }
                                  </Collapse>

                                </div>
                              </>}
                            </Col>
                          </Row>
                        : slide.intro
                        ? slide.intro.first
                        ?<First
                            title={info_beslides.title}
                            company={info_beslides.customer.company}
                            logo={slide.intro&&slide.intro.logo}/>
                        :<Last
                          toggle={toggleMenu}
                          reset={resetSlides}
                          companyData={slide.intro&&slide.intro.companyData}
                          cardImg={slide.intro&&slide.intro.card_img}/>
                        : null
                      }
                    </Col>

                  </Row>)}
                </>
                :null}
            </Container>
        :null}

    </>

  )
}

export default BeSlides;
