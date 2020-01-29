import {put,call,takeLatest} from 'redux-saga/effects';
import * as actions from '../redux/actions/beslides-actions';
import {add_toast} from '../redux/actions/toasts-actions';
import {api_public} from '../services';

function* getBeslidesData({beslides_name}){
  yield put(actions.request_beslides())
  try {
    const response = yield call(api_public.getOneBeslides,beslides_name)
    if(response.error){
      yield put(actions.error_beslides(response.error))
      yield put(add_toast({
        error:true,
        text:response.error
      }))
      yield put(actions.cancel_beslides())
    } else {
      yield put(actions.success_beslides(response.message))
      yield put(actions.set_beslides(response.beslides[0].slides))
      yield put(actions.set_beslides_info(response.beslides[0]))
      yield put(add_toast({
        error:false,
        text:response.message
      }))
      yield put(actions.cancel_beslides())
    }
  } catch (error) {
    yield put(actions.error_beslides(error))
    yield put(add_toast({
      error:true,
      text:error
    }))
    yield put(actions.cancel_beslides())
  }

}


export function* watchBeslidesData(){
  yield takeLatest(actions.START_GET_BESLIDES,getBeslidesData)
}
