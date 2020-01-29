import React,{useRef,useEffect} from 'react';
import lottie from 'lottie-web';
import '../../style/anims.css';

const Anim = (props)=>{
  const {
    data,
    // inView,
    visible=true,
    speed,
    loop,
    className,
    rendererSettings={},
    onEnd
  } = props
  const animation = useRef()
  const cont = useRef()
  // const [isPlaying,setPlaying] = useState(false)
  useEffect(()=>{
      if(cont.current){
        animation.current = lottie.loadAnimation({
          container: cont.current,
          renderer: 'svg',
          loop,
          autoplay: true,
          rendererSettings,
          animationData: data
        })
        animation.current.addEventListener('complete',()=>{
          if(onEnd){
            onEnd()
          }
        })
        if(speed){
          animation.current.setSpeed(speed)
        }

        return ()=>animation.current.addEventListener('complete')
      }

      //
  //eslint-disable-next-line
  },[])
  useEffect(()=>{
    if(animation.current){
      if(visible){
        animation.current.play()
      } else {
        animation.current.stop()
      }
    }
  },[visible])
  // const setPlay=()=>{
  //   if(!isPlaying){
  //     animation.current.goToAndPlay(0)
  //     setPlaying(true)
  //   }
  //
  // }
  // useEffect(()=>{
  //   if(inView){
  //     setPlay()
  //   }
  //   //eslint-disable-next-line
  // },[inView])
  return(
    <div
      className={`${className} anim`}
      style={{heigth:'200px'}}
      // onMouseEnter={setPlay}
      ref={cont}
    />
  )
}

export default Anim
