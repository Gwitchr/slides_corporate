import React,{useState,useEffect,useRef} from 'react';
import {
  Row,
  // Col
} from 'reactstrap';
import {motion} from 'framer-motion'
// import {randomIntegerInterval as randomI} from '../../../utils';

function Clients({clients=[],duration}){
  const contRef=useRef()
  const [contWidth,setContWidth] = useState(0)
  const [contHeight,setContHeight] = useState(0)
  const [canStart,setCanStart] = useState(false)
  useEffect(()=>{
    if(contRef.current){
      let rect = contRef.current.getBoundingClientRect()
      // console.log('rext',rect.width)
      setContWidth(rect.width*1.5)
      setContHeight(rect.height*1.1)
      setCanStart(true)
      // console.log('randomFactor',randomFactor(100))

    }
  },[])
  const animStates = {
    start:({x,y})=>({
      x:-300,
      y:(y*Math.floor(contHeight/5))
    }),
    finish:({x})=>({
      x
    })
  }

  return(
    <Row
      className="">
        <div className="full_slide_graph abs_cont" ref={contRef}>
          {canStart&&clients.map(({link,img},i)=><motion.a
            key={i}
            href={link}
            className="my-2 client_img"
            variants={animStates}
            custom={{x:contWidth,y:i%5}}
            initial={"start"}
            animate={"finish"}
            transition={{
              duration,
              // duration:1+randomI(duration,(duration+i)),
              // delay:i?i+randomI((i),(duration+i)):0,
              delay:i*.6,
              // delay:i,
              // duration:randomI(i,(duration)),
              // delay:i?randomI((i),(duration+i)):0,
              loop:Infinity
            }}
            target="_blank" rel="noopener noreferrer"
            >
              <img className="img_client img-fluid" src={img} alt=""/>
            </motion.a>)}

        </div>
    </Row>
  )
}

export default Clients;
