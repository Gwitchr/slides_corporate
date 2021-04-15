import React,{useState,useEffect} from 'react';
import {Container,Row,Col,Nav,NavItem,NavLink} from 'reactstrap';
import {motion} from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {CircleProgress} from '../elements';
import {useInterval} from '../../hooks';

import {CHANGE_FEATURES} from '../../constants';

function Features({features,background}){
  const [play,setPlay] = useState(true)
  const [currFeature,setCurrFeature] = useState(0)
  const [progress,setProgress] = useState(100)
  useEffect(()=>{
    if(!play){
      setPlay(true)
      setProgress(100)
    }
  },[play])
  useInterval(()=>{
    const quota = 10000/CHANGE_FEATURES
    setProgress(progress-quota)
  },play?100:null)
  useInterval(()=>{
    changeFeature()
    setProgress(100)
  },play?CHANGE_FEATURES:null)
  const changeFeature=(changeTo)=>{
    if(changeTo!==undefined){
      setCurrFeature(changeTo)
    } else {
      let next;
      (currFeature + 1)>(features.length-1)? next = 0 :next = currFeature + 1
      setCurrFeature(next)
    }
    setPlay(false)
  }
  const {graphs:[graph1,graph2,graph3]} = features[currFeature]
  return(
    <Container className={`${background?'abs_cont':''}`}>
      {background&&<div className="trans_sect" style={{...background,top:'10vh'}}/>}
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h3 className="sect_title" >
              Los porqués de usar BeSlides
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={7} className="feat_cont abs_cont">
            {graph1?<motion.img
                 animate={{y:0,opacity:1}}
                 initial={{y:10,opacity:0}}
                 transition={{delay:.3}}
                 className="feature_img" style={graph1.style}
                 key={graph1.img}
                 src={graph1.img} alt="feature" />:null}
            {graph2?<motion.img
                 animate={{y:0,opacity:1}}
                 initial={{y:10,opacity:0}}
                 transition={{delay:.5}}
                 className="feature_img" style={graph2.style}
                 key={graph2.img}
                 src={graph2.img} alt="feature" />:null}
            {graph3?<motion.img
                 animate={{y:0,opacity:1}}
                 initial={{y:10,opacity:0}}
                 transition={{delay:.7}}
                 className="feature_img" style={graph3.style}
                 key={graph3.img}
                 src={graph3.img} alt="feature" />:null}
          </Col>
          <Col xs={12} md={5}>
            <Nav vertical>
              {features.map(({title,text,icon},i)=><NavItem className="feature_menu_item p-2" active={i===currFeature} key={i}>
                <NavLink onClick={()=>changeFeature(i)} href="#">
                  <Row>
                    <Col className="d-flex align-items-center" xs={4} md={2}>
                      <CircleProgress className={i===currFeature?'':'d-none'} radius={15} stroke={2} progress={progress} />
                    </Col>
                    <Col xs={8} md={10}>
                      <p>
                        <b><FontAwesomeIcon icon={icon}/>&nbsp;{title}</b> <br/>
                      {text}
                      </p>
                    </Col>
                  </Row>
                </NavLink>
              </NavItem>)}
            </Nav>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Features;
