import React,{useState,useEffect} from 'react';
import {
  Toast,
  ToastHeader,
  Progress,
  ToastBody
} from 'reactstrap';
import {TOAST_TIMEOUT} from '../../constants';

function ToastMsg(props){
  const [progr,setProgr] = useState(100)
  // const [show,setShow] = useState(true)
  useEffect(()=>{
    const {cleanToast,idToast} = props
    const animator = setTimeout(()=>{
      setProgr(0)
    },TOAST_TIMEOUT.pad)
    const remover = setTimeout(()=>{
      cleanToast(idToast)
    },(TOAST_TIMEOUT.pad+TOAST_TIMEOUT.main))
    return ()=>{
      clearTimeout(animator)
      clearTimeout(remover)
    }
    // eslint-disable-next-line
  },[])
  const toggleToast=()=>{
    const {idToast,cleanToast} = props
    // setShow(!show)
    cleanToast(idToast)
  }
  const {error,text,state,i} = props
  return(

      <Toast style={{
          top:`${i*110}px`,
          // display:`${show?'block':'none'}`
        }}
        className="toast_global">
        <ToastHeader
          toggle={toggleToast}
          icon={`${error?'warning':'success'}`}>
          BeSlides.app&nbsp;&nbsp; <br/>
        </ToastHeader>
        <Progress
          color="info"
          value={progr}
          style={{height:'2px'}}/>
        <ToastBody>
          {text&&text.toString()}
          <br/>
          <b>{state}</b>
        </ToastBody>
      </Toast>
  )
}

export default ToastMsg;
