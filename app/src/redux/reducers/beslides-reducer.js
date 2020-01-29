import {
  REQUEST_BESLIDES,
  CANCEL_BESLIDES,
  SUCCESS_BESLIDES,
  ERROR_BESLIDES,
  RESET_BESLIDES,
  SET_ONE_BESLIDES,
  SET_INFO_BESLIDES
} from '../actions/beslides-actions';

export const beslidesReducer=(
  state={
    beslides:[{}],
    info_beslides:{customer:{}},
    message:false,
    error:false,
    isFetching:false
  },
  action
)=>{
  const {
    type,
    beslides,
    info_beslides,
    message,
    error,
    isFetching
  } = action

  switch (type) {
    case REQUEST_BESLIDES:
      return({...state,isFetching})
    case CANCEL_BESLIDES:
      return({...state,isFetching})
    case SUCCESS_BESLIDES:
      return({...state,message})
    case ERROR_BESLIDES:
      return({...state,error})
    case RESET_BESLIDES:
      return({...state,message,error})
    case SET_ONE_BESLIDES:
      return ({...state,beslides})
    case SET_INFO_BESLIDES:
      return ({...state,info_beslides})

    default:
      return ({...state})

  }
}
