import {captureException} from '@sentry/browser';

export function debounce(func,delay){
  let later;
  return ()=>{
    if(later)clearTimeout(later)
    later = setTimeout(()=>{
      later = null
      func()
    },delay)
  }
}

export function throttle(func,delay){
  let throttled = false
  return()=>{
    if(!throttled){
      func()
      throttled = true
      setTimeout(()=>throttled=false,delay)
    }
  }

}

// function debounce(func, wait, immediate) {
// 	var timeout;
// 	return function() {
// 		var context = this, args = arguments;
// 		var later = function() {
// 			timeout = null;
// 			if (!immediate) func.apply(context, args);
// 		};
// 		var callNow = immediate && !timeout;
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 		if (callNow) func.apply(context, args);
// 	};
// };

export const setHJson = (i, method, b) => {
    i = {
        method,
        mode:'cors',
        headers:new Headers({
            "Content-Type":"application/json",
            "Authorization":`JWT ${sessionStorage.getItem(process.env.REACT_APP_TOKEN_NAME)||''}`
        })
    }
    if (b) {
        i.body = JSON.stringify(b)
    }
    return i
};

export function setHFData(i,method,b){
  i = {
    method,
    mode:'cors',
    headers:new Headers({
      "Accept": "application/json, */*",
      "Authorization":`JWT ${sessionStorage.getItem(process.env.REACT_APP_TOKEN_NAME)}`
    }),
    body:b
  }
  return i
}

export const fetchStatus=(response)=>{
    // reject not ok response
   // if (!response.ok) {
   //    throw Error(response.statusText);
   // }
   return response.json() // or return response.text()

}

export const getErrors =(error)=>{
  // captureException(error);
  if(process.env.NODE_ENV==='production'){
    captureException(error);
  }
  console.warn(error)
  return ({error})
}

export const remEmpty=(b)=>{
  let n = {}
  Object.keys(b).map(a=>{
    let c = b[a]
    if(Array.isArray(c)&&!c.length){
      c = ''
    }
    if(c&&c!==''&&typeof c !=='undefined'){
      return n = {
        ...n,
        [a]:c
      }
    }
    return null
  })
  return n
}

export const notEmpty=(obj)=>{
  for (let key in obj) {
    if (obj[key]==='')return false
  }
  return true
}


export const opt_date = {
  year: '2-digit',
  month: 'numeric',
  day: 'numeric'
}

export const gradFillFade =(context,color,stop)=>{
  let colorBase = color.split('(')[1].split(',').slice(0,3).join(',')
  // console.log(colorBase)
  let grad = context.createLinearGradient(0, 0, 0, 300)
  grad.addColorStop(0, `rgba(${colorBase},${stop.first})`)
  grad.addColorStop(1, `rgba(${colorBase},${stop.second})`)
  return grad
}

export const randomFactor=(factor)=>{
  return Math.round((Math.random()*factor));
}


export const randomIntegerInterval=(min,max)=> {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const shorten=(str, maxLen, separator = ' ')=> {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen));
}

export const formatNmxn =(number)=>{
  return parseFloat(number).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const yearsDate =(d2,d1)=>{
  return Math.floor((d2-d1)/(3.1536*Math.pow(10,10)))
}

export const inputToDate=(date)=>{
  // /(\d{4}-\d{2}-\d{2})/g for testing DDDD-DD-DD
  if(date===''){
    return ''
  } else if(typeof date.getMonth === 'function'||date.indexOf('T')>0){
    return date
  }
  let [year,month,day] = date.split('-')
  return new Date(year,parseInt(month,10)-1,day)
}

// export const formatBreak = (str)=>{
//   let prgh = []
//   return prgh = srt.split('\n')
// }

// export const requestNotif =()=>{
//     if(("Notification" in window)&& window.Notification){
//         window.Notification.requestPermission().then(result=>{
//             if (result==='denied'){
//                 alert('Las notificaciones del sistema son importantes '+
//                 'puede activarlas desde las preferencias del sistema')
//             } else if (result==='granted'){
//             new Notification("Notificaciones activadas",optNotif)
//         }
//     })
//     .catch(e=>console.warn(e))
//     }
// }

export const optDateHour={
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour:'numeric',
  minute:'numeric'

}

export const optDate={
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}

export const months_es = [
  'Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'
]

export const months_full_es = [
  'Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre', 'Octubre','Noviembre','Diciembre'
]

export const days_es = [
  'Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'
]
export const days_min_es = [
  'Lun','Mar','Mié','Jue','Vie','Sáb','Dom'
]
