import {useState,useEffect,useRef} from 'react';
import {debounce} from '../utils';
import {DEBOUNCE_TIME} from '../constants';


export function useVisible(theRef,defVal){
  const [visible,setVisible] = useState(defVal?defVal:false);
  const checkInView=debounce(()=>{
    const place = theRef.current.getBoundingClientRect()
    if(place){
      if(place.top>=0&&place.bottom<=(window.innerHeight)){
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
  },DEBOUNCE_TIME)
  useEffect(()=>{
      window.addEventListener('scroll',checkInView)
      return ()=>window.removeEventListener('scroll',checkInView)
    //eslint-disable-next-line
    },[])
    return visible
}

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
