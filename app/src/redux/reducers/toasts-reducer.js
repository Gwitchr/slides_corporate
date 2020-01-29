import {
  REMOVE_TOAST,
  ADD_TOAST
} from '../actions/toasts-actions';

export const toastsReducer=(
  state={
    toasts:[

    ]
  },action
)=>{
  const {
    idToast,
    toast,
    type
  } = action
  switch (type) {
    case ADD_TOAST:
      return({
        ...state,
        toasts: [
          ...state.toasts,
          toast
        ]
      })

    case REMOVE_TOAST:
      return ({
        ...state,
        toasts:state.toasts.filter((item)=>item.idToast!==idToast)
      })
    default:
      return ({...state})

  }
}
