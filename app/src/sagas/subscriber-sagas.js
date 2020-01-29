import {takeLatest,put,call} from 'redux-saga/effects';
import * as actions from '../redux/actions/subscribe-actions';
// import { ADMIN_MAIL } from '../globals';
import { api_public } from '../services'

function* postDataSubscriber({dataSubs}){
  yield put(actions.reset_subscribe())
  yield put(actions.post_subscribe())
  try {
    const data = yield call(api_public.postSubscribe,dataSubs);
    if(data.error){
      yield put(actions.failure_subscribe(data.error))
      yield put(actions.cancel_subscribe())
    } else {
      yield put(actions.success_subscribe(data.message))
      yield put(actions.cancel_subscribe())
    }

  } catch(error){
    yield put(actions.failure_subscribe(error))
    yield put(actions.cancel_subscribe())
  }
}

export function* watchPostSubscriber(){
  yield takeLatest(actions.START_SUBSCRIBE,postDataSubscriber)
}
