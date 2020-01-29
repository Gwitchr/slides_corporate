import React,{useState,useEffect,useRef} from 'react';
import {
  AnimatePresence,
  motion
} from 'framer-motion';
import {DELAY_TEXT} from '../../constants';
import '../../style/text_change.css';

function TextChange({className='',classText,pre_text='',text_possible=[''],line_three='',line_four='',text_possible_2=['']}){
  const [currTextIndx,setTextIndx] = useState(0)
  useInterval(()=>{
    const count = currTextIndx+1
    if(count===text_possible.length) return setTextIndx(0)
    return setTextIndx(count)
  },DELAY_TEXT)

  return(
    <>
      <h1 className={`${className}`}>
        {pre_text}&nbsp;
        <span className="abs_cont size_text">
          {text_possible[currTextIndx]}
          <AnimatePresence>
            <motion.div
              positionTransition
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0,  opacity: 1, zIndex:1 }}
              exit={{ y: -30,   opacity: 0, zIndex:0 }}
              transition={{duration:.3}}
              key={currTextIndx}
              className={`${classText} over_text text-nowrap`}>
                    {text_possible[currTextIndx]}
            </motion.div>
          </AnimatePresence>

        </span> <br/>
        {line_three} <br/>
        {line_four}&nbsp;
        <span className="abs_cont size_text">
          {text_possible_2[currTextIndx]}
          <AnimatePresence>
            <motion.div
              positionTransition
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0,  opacity: 1, zIndex:1 }}
              exit={{ y: -30,   opacity: 0, zIndex:0 }}
              transition={{duration:.3}}
              key={currTextIndx}
              className={`${classText} over_text text-nowrap`}>
                    {text_possible_2[currTextIndx]}
            </motion.div>
          </AnimatePresence>

        </span>

      </h1>
    </>
  )
}

export default TextChange


function useInterval(callback, delay) {
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
