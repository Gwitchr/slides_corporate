export const AUTHOR = "luiscasillas@n12.mx";
export const DEFAULT_DESCRIPTION = "Presentaciones elegantes y efectivas";
export const URL = "https://www.beslides.app";
export const DEFAULT_TITLE = "BeSlides";
export const SOCIAL = {
  facebook:'https://www.facebook.com/n12estudio',
  twitter:'https://twitter.com/N12Estudio',
  linkedin:'',
  instagram:''
}

export const LOCAL_MESSAGES ={
  DUPLICATED_ADD_VALUE:'Sólo puedes agregar una vez el valor',
  NOT_EMPTY:'No puede dejar el campo vacío',
  ARRAY_EMPTY:'Seleccione al menos un valor',
  FORMAT_MISMATCH:'El valor no corresponde con el formato necesario'
}

export const DELAY_TEXT = 3000
export const ANIM_TRANS = 3000

export const PROMO_SHOW = process.env.NODE_ENV==='development'?1500:30000

export const DEBOUNCE_TIME = 200
export const THROTTLE_TIME = 500

export const DELAY_ANIM = .4

export const TOAST_TIMEOUT = {
  main:5000,
  pad:500
}
