import React,{useState,useEffect} from 'react';
import {Form,Progress,InputGroup, Input, InputGroupAddon, Button,FormGroup} from 'reactstrap';
import {useInterval} from '../../hooks';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {LOCAL_MESSAGES} from '../../constants'

function PromoCoupons({closePromo,startOffer,setToast,isFetching,message}){
  let [currTime,setTime] = useState(300000)
  let [email,setEmail] = useState('')
  useInterval(()=>{
    setTime(currTime-1000)
  },1000)
  useEffect(()=>{
    if(currTime===0){
      closePromo()
    }
  },[currTime,closePromo])
  useEffect(()=>{
      if(message){
        closePromo()
      }
  },[message,closePromo])
  const minutes = Math.floor((currTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((currTime % (1000 * 60)) / 1000);
  const getValue=(e)=>{
    setEmail(e.target.value)
  }
  const startSend=()=>{
    if(email!==''){
      startOffer({email})
    } else {
      setToast({
        error:true,
        text:LOCAL_MESSAGES.NOT_EMPTY
      })
    }
  }
  return (
    <>
      <h3 className="title_promo">
        <b>
          ¡Obtén 200 mxn de descuento en tu primera compra de Beslides!
          <br/>
          <small>
            Comparte tu código y recibe 100 mxn adicionales para tu siguiente compra y 100 mxn para cada persona que lo utilice.
          </small>
        </b>
      </h3>
      <p>
        Ingresa tu correo para obtener tu cupón
      </p>
      <br/>
      {
        isFetching
        ? <Progress value={100} animated />
        : <Form onSubmit={startSend}>
          <FormGroup className="d-block d-sm-none text-center">
              <Input onChange={getValue} value={email}
                  required
                  className="custom text-light"
                  type="email" placeholder="Tu correo"
                  name="email"/>
              <Button type="submit"
                      block
                      className="hvr_top"
                      color="primary">
                  Obtener cupón &nbsp;
                 <FontAwesomeIcon icon="paper-plane"/>
              </Button>
            </FormGroup>
            <InputGroup className="d-none d-sm-flex text-center">
                <Input onChange={getValue} value={email}
                    required
                    className="custom text-light"
                    type="email" placeholder="Tu correo"
                    name="email"/>
                  <InputGroupAddon addonType="append">
                    <Button type="submit"
                            className="hvr_top"
                            color="primary">
                        Obtener cupón &nbsp;
                       <FontAwesomeIcon icon="paper-plane"/>
                    </Button>
                  </InputGroupAddon>
              </InputGroup>
        </Form>
      }
      <br/>
      <small className={currTime<60000?'text-danger':''}>
        <FontAwesomeIcon icon="stopwatch"/> Quedan&nbsp;{`${minutes}:${seconds>10?seconds:`0${seconds}`}`}
      </small>
    </>
  )
}

export default PromoCoupons;
