import {put,call,takeLatest} from 'redux-saga/effects';
import * as actions from '../redux/actions/orders-actions';
import {add_toast} from '../redux/actions/toasts-actions';
import {api_public} from '../services';

function* postDataOrder({dataOrder}){
  yield put(actions.request_order());
  try {
    const resp = yield call(api_public.postOrder,dataOrder);
    if(resp.error){
      yield put(actions.error_order(resp.error))
      yield put(add_toast({
        error:true,
        text:resp.error
      }))
    } else {
      yield put(actions.success_order(resp.message))
      yield put(actions.set_order(resp.order))
      yield put(add_toast({
        error:false,
        text:resp.message
      }))
    }
  } catch (error) {
    yield put(actions.error_order(error))
    yield put(add_toast({
      error:true,
      text:error.toString()
    }))
  }
}

export function* watchOrdersSaga(){
  yield takeLatest(actions.START_ORDER,postDataOrder)
}
