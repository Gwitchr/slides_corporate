import React,{useState} from 'react';
import {
  Container,Row,Col,Card,
  CardImg,CardBody,
  CardImgOverlay,
  CardTitle,
  CardText
} from 'reactstrap';
import {motion,AnimatePresence} from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useInterval} from '../../hooks';
import {CHANGE_USAGE} from '../../constants';
function UseCases({useCases=[{
  client:'',
  colors:[],
  industry:'',
  focus:'',
  style:''
}],background}){
  const [indexStory,setCurrStory] = useState(0)
  const [direction,setDirection] = useState(false)
  const [canChange,setCanChange] = useState(true)
  useInterval(()=>{
    changeCard(true)
  },canChange?CHANGE_USAGE:null)
  const refLength = (useCases.length-1)
  const changeCard=(dir)=>{

    let nextPage = dir?indexStory+1:indexStory-1
    if(nextPage<0)nextPage=refLength
    if(nextPage>refLength) nextPage = 0
    setCurrStory(nextPage)
  }
  const changeStory=async(dir)=>{
    await setDirection(dir)
    await changeCard(dir)
    setCanChange(false)
    setTimeout(()=>setCanChange(true),100)
  }
  const animStates ={
    enter:(direction)=>({
      x:direction?'50%':'-50%',
      opacity:0
    }),
    center:{
      opacity:1,
      zIndex:1,
      x:0
    },
    exit:(direction)=>({
      zIndex:0,
      x:direction?'-10%':'10%',
      opacity:0
    })
  }
  const varImg={
    enter:{ scale:1.2, opacity: 0 },
    shown:{ scale:1, opacity: 1 }
  }

  const varPrevImg={
    enter:{ opacity: 0},
    shown:{ opacity: 1 }
  }

  const {scenario,text} = useCases[indexStory]

  return(
    <Container className="usecases_cont abs_cont" fluid>
      {background&&<div className="trans_sect" style={{...background,top:'30vh'}}/>}
      <Container className="text-center pt-5 ">

        <Row className="text-center">
          <Col>
            <motion.h3 >
              BeSlides son
              <br/><b className="text_underlined">perfectas para</b>
            </motion.h3>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center sect_70">
          <Col className="">
            <Card className="customer_story_card bg-transparent border-0 abs-cont text-center">
              <CardImg
                tag={motion.img}
                variants={varImg}
                initial={"enter"}
                animate={"shown"}
                transition={{duration:.7,ease: "easeOut"}}
                key={indexStory}
                src={useCases[indexStory].img}
                className="img-fluid sect_50" />
                <CardImgOverlay  >
                      <CardBody  >
                        <div className="abs_cont">
                        <div className="card_placeholder mt-5">
                          <CardTitle tag="h4">
                            {scenario}
                          </CardTitle>
                          <hr className="w-50"/>
                          <CardText>
                            {text}
                          </CardText>

                        </div>
                        <div className="card_cust_overlay">
                          <AnimatePresence>
                              <motion.div
                                // positionTransition
                                tag={motion.div}
                                className="abs_cont"
                                custom={direction}
                                variants={animStates}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                key={indexStory}>
                                    <div className="customer_story_text d-flex flex-column justify-content-end align-items-center">
                                      <div className="cust_text_holder text-light w-50 mt-5">
                                        <CardTitle tag="h4">
                                          {scenario}
                                        </CardTitle>
                                        <hr className="w-50"/>
                                        <CardText>
                                          {text}
                                        </CardText>
                                      </div>

                                    </div>

                              </motion.div>

                          </AnimatePresence>
                        </div>
                      </div>
                      </CardBody>
                 </CardImgOverlay>
              {/* <CardBody className="d-block d-md-none border border-light">

                  <div className="abs_cont">
                    <div className="card_placeholder">


                    </div>
                    <div className="card_cust_overlay">
                      <AnimatePresence>
                          <motion.div
                            // positionTransition
                            tag={motion.div}
                            className="abs_cont"
                            custom={direction}
                            variants={animStates}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            key={indexStory}>
                                <div className="customer_story_text">

                                </div>

                          </motion.div>

                      </AnimatePresence>
                    </div>
                  </div>
                </CardBody> */}


              <button onClick={()=>changeStory(true)} className="control_client_prev">
                <FontAwesomeIcon icon="arrow-left"/>
              </button>
              <button onClick={()=>changeStory(false)} className="control_client_next">
                <FontAwesomeIcon icon="arrow-right"/>
              </button>
              <div className="usecase_img_prev">
                <motion.img
                  className="img-fluid"
                  initial={"enter"}
                  animate={"shown"}
                  variants={varPrevImg}
                  key={indexStory+1}
                  src={useCases[(indexStory+1)>refLength?0:(indexStory+1)].img}
                   alt="use case prev"/>
              </div>
              <div className="usecase_img_next">
                <motion.img
                  className="img-fluid"
                  initial={"enter"}
                  animate={"shown"}
                  variants={varPrevImg}
                  key={indexStory-1}
                  src={useCases[(indexStory-1)<0?refLength:(indexStory-1)].img}
                  alt="use case next"/>
                </div>

            </Card>

          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default UseCases
