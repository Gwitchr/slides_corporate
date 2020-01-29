import {takeLatest,put,call} from 'redux-saga/effects';
import * as actions from '../redux/actions/registry-actions';
// import { ADMIN_MAIL } from '../globals';
import { api_public } from '../services'

function* postDataRegistry({dataRegistry}){
  yield put(actions.reset_registry())
  yield put(actions.request_registry())
  try {
    const data = yield call(api_public.postDataRegistry,dataRegistry);
    if(data.error){
      yield put(actions.error_registry(data.error))
      // yield put(actions.cancel_registry())
    } else {
      yield put(actions.success_registry(data.message))
    }

  } catch(error){
    yield put(actions.error_registry(error))
    yield put(actions.cancel_registry())
  }
}

export function* watchPostRegistry(){
  yield takeLatest(actions.START_REGISTRY,postDataRegistry)
}
