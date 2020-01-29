import { put, call, takeLatest } from 'redux-saga/effects'
import * as actions from '../redux/actions/contact-actions';
import {add_toast} from '../redux/actions/toasts-actions';
// import { ADMIN_MAIL } from '../globals';
import { api_public } from '../services'

function* postDataLead({dataLead}) {
    yield put(actions.request_lead())
    const lead = yield call(api_public.postDataLead,dataLead);
    try {
      if(lead.error){
        yield put(actions.error_lead(lead.error))
        yield put(add_toast({
          error:true,
          text:lead.error
        }))
        // yield put(actions.cancel_lead())
      } else {
        yield put(actions.success_lead(lead.message))
        // yield put(actions.cancel_lead())
      }
    } catch (error) {
      yield put(actions.error_lead(error))
      yield put(add_toast({
        error:true,
        text:error
      }))
    }

}

//Watchers



export function* watchContactData() {
    /*
        takeLatest will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
        i.e. concurrent GET_ALL_PRODUCTS actions are allowed
    */
     // takeLatest (queloactiva,queSagaActiva,quepasaenlugardelaaccion)
    yield takeLatest(actions.START_LEAD, postDataLead)
}
