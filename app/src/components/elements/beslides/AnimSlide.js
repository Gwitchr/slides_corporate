import React,{useRef,useEffect,useState} from 'react';
import {getErrors,fetchStatus} from '../../../utils';
import lottie from 'lottie-web';

function AnimSlide(props){
  const animRef = useRef()
  const animHandle = useRef()
  const [dataAnim,setDataAnim] = useState({})
  const {
    small,
    className,
    renderer='svg',
    speed=false,
    loop=false,
    autoplay=true,
    rendererSettings={},
    onEnd=false,
    data
  } = props
  useEffect(()=>{
    if(typeof data === 'string'){
      getAnim()
    } else {
      setDataAnim(data)
    }
    // eslint-disable-next-line
  },[])
  useEffect(()=>{
    if(animRef.current&&dataAnim.v){
      if(animHandle.current)animHandle.current.destroy()
      animHandle.current = lottie.loadAnimation({
        container: animRef.current,
        renderer,
        loop:small?true:loop,
        autoplay,
        rendererSettings,
        animationData: dataAnim
      })
      if(onEnd){
        animHandle.current.addEventListener('complete',()=>{
          onEnd()
        })
        return ()=>animHandle.current.addEventListener('complete')
      }
      if(speed){
        animHandle.current.setSpeed(speed)
      }

      // return ()=>animHandle.current.addEventListener('complete')
    }
    // eslint-disable-next-line
  },[dataAnim])
  const getAnim =async()=>{
    try {
      const resp = await fetch(data)
      .then(fetchStatus)
      // console.log('respAnim',resp)
      setDataAnim(resp)
    } catch (error) {
      // console.warn('animslide',error)
      getErrors(error)
    }
  }
  return (
    <div
      className={`${className} anim`}
      style={{heigth:'200px'}}
      // onMouseEnter={setPlay}
      ref={animRef}
    />
  )
}

export default AnimSlide
