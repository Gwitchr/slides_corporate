import React,{useState,useEffect,useRef} from 'react';
import lottie from 'lottie-web';
import {useVisible} from '../../hooks';
import '../../style/anims.css';

function AnimIcon({data}) {
  const element = useRef()
  const animation = useRef()
  const visible = useVisible(element)
  const [playing,setPlay] = useState(false)
  const playAnim=(v)=>{
    if(v&&!playing){
      animation.current.goToAndPlay(0,true)
      setPlay(true)
    }
  }
  useEffect(()=>{
    if(element.current){
      animation.current = lottie.loadAnimation({
        container: element.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: data
      })
      animation.current.addEventListener('complete',()=>{
        setPlay(false)
      })
      return ()=>animation.current.addEventListener('complete')
    }
    //eslint-disable-next-line
  },[])
  useEffect(()=>{
    if(visible){
      playAnim(true)
    }
    //eslint-disable-next-line
  },[visible])

  return(
    <div className="animSend"
         onMouseEnter={()=>playAnim(true)} ref={element}>
      {playing}
    </div>
  )
}

export default AnimIcon
