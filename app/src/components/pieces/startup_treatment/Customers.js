import React,{useState} from 'react';
import {Container,Row,Col,Card,CardImg,CardBody} from 'reactstrap';
import {motion,AnimatePresence} from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
function Customers({customers=[{
  client:'',
  colors:[],
  industry:'',
  focus:'',
  style:''
}],background}){
  const [indexStory,setCurrStory] = useState(0)
  const [direction,setDirection] = useState(false)
  const changeCard=(dir)=>{
    const refLength = (customers.length-1)
    let nextPage = dir?indexStory+1:indexStory-1
    if(nextPage<0)nextPage=refLength
    if(nextPage>refLength) nextPage = 0
    setCurrStory(nextPage)
  }
  const changeStory=async(dir)=>{
    await setDirection(dir)
    await changeCard(dir)
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
      x:direction?'-50%':'50%',
      opacity:0
    })
  }
  const varImg={
    enter:{ scale:1.5, opacity: 0 },
    shown:{ scale:1, opacity: 1 }
  }
  const {client,colors,industry,focus,style} = customers[indexStory]
  return(
    <Container className="text-center pt-5 abs_cont">
      {background&&<div className="trans_sect" style={background}/>}
      <Row className="text-center">
        <Col>
          <motion.h3 >
            Ejemplos de Clientes del
            <br/><b className="text_underlined">Startup Treatment:</b>
          </motion.h3>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center sect_70">
        <Col className="">
          <Card className="customer_story_card bg-transparent border-0 abs-cont">
            <CardBody className="d-block d-md-none border border-light">
              <CardImg
                tag={motion.img}
                variants={varImg}
                initial={"enter"}
                animate={"shown"}
                transition={{duration:.7,ease: "easeOut"}}
                key={indexStory}
                src={customers[indexStory].img}
                className="img-fluid p-5 m-5" />
                <div className="abs_cont">
                  <div className="card_placeholder">
                    <h4>
                      {client}
                    </h4>
                    <hr/>
                      <blockquote className="blockquote">
                        <p className="multiline">
                          {`${client} se desempeña en la industria de ${industry} con una landing page que sirve para ${focus} con un estilo ${style} `}
                        </p>
                        <footer className="blockquote-footer"><cite title="Source Title">{`Usando como color principal`}<span className="customer_color mx-2" style={{backgroundColor:colors[0]}}/><br/>{` y como color secundario `}<span className="customer_color mx-2" style={{backgroundColor:colors[1]}}/>
                      </cite></footer>

                      </blockquote>
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
                                <h4>
                                  {client}
                                </h4>
                                <hr/>
                                  <blockquote className="blockquote">
                                    <p className="multiline">
                                      {`${client} se desempeña en la industria de ${industry} con una landing page que sirve para ${focus} con un estilo ${style} `}
                                    </p>
                                    <footer className="blockquote-footer"><cite title="Source Title">{`Usando como color principal`}<span className="customer_color mx-2" style={{backgroundColor:colors[0]}}/><br/>{` y como color secundario `}<span className="customer_color mx-2" style={{backgroundColor:colors[1]}}/>
                                  </cite></footer>

                                  </blockquote>
                              </div>

                        </motion.div>

                    </AnimatePresence>
                  </div>
                </div>
              </CardBody>

            <Row className="no-gutters d-none d-md-flex">
              <Col className="img_holder_cust_card p-5" xs={5}>
                    <CardImg
                      tag={motion.img}
                      variants={varImg}
                      initial={"enter"}
                      animate={"shown"}
                      transition={{duration:.7,ease: "easeOut"}}
                      key={indexStory}
                      src={customers[indexStory].img}
                      className="" />
              </Col>
              <Col className="bg-light abs_cont">
                <CardBody
                  className="card_placeholder sect_50">
                  <h4>
                    {client}
                  </h4>
                  <hr/>
                    <blockquote className="blockquote">
                      <p className="multiline">
                        {`${client} se desempeña en la industria de ${industry} con una landing page que sirve para ${focus} con un estilo ${style} `}
                      </p>
                      <footer className="blockquote-footer"><cite title="Source Title">{`Usando como color principal`}<span className="customer_color mx-2" style={{backgroundColor:colors[0]}}/><br/>{` y como color secundario `}<span className="customer_color mx-2" style={{backgroundColor:colors[1]}}/>
                    </cite></footer>
                    </blockquote>
                </CardBody>
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
                        key={indexStory}

                        >
                          <CardBody
                            className="customer_story_text"

                            >
                            <h4>
                              {client}
                            </h4>
                            <hr/>
                            <p className="multiline">
                              {`${client} se desempeña en la industria de ${industry} con una landing page que sirve para ${focus} con un estilo ${style} `}
                            </p>
                            <footer className="blockquote-footer"><cite title="Source Title">{`Usando como color principal`}<span className="customer_color mx-2" style={{backgroundColor:colors[0]}}/><br/>{` y como color secundario `}<span className="customer_color mx-2" style={{backgroundColor:colors[1]}}/>
                          </cite></footer>
                          </CardBody>

                      </motion.div>

                  </AnimatePresence>
                </div>

              </Col>

            </Row>
            <button onClick={()=>changeStory(true)} className="control_client_prev">
              <FontAwesomeIcon icon="arrow-left"/>
            </button>
            <button onClick={()=>changeStory(false)} className="control_client_next">
              <FontAwesomeIcon icon="arrow-right"/>
            </button>
          </Card>

        </Col>
      </Row>
    </Container>
  )
}

export default Customers
