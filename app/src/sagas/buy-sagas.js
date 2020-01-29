import { put, call, takeLatest } from 'redux-saga/effects'
import * as actions from '../redux/actions/buy-actions';
import {add_toast} from '../redux/actions/toasts-actions';
import {set_order} from '../redux/actions/orders-actions';
// import { ADMIN_MAIL } from '../globals';
import { api_public } from '../services'

function* postDataBuy({dataBuy}) {
    yield put(actions.request_buy())
    const buy = yield call(api_public.postPurchase,dataBuy);
    if(buy.error){
      yield put(actions.error_buy(buy.error))
      // yield put(actions.cancel_buy())
    } else {
      yield put(actions.success_buy(buy.message))
      console.log(buy.order)
      // yield put(actions.cancel_buy())
    }

}

function* postSessionData({order_id}) {
    yield put(actions.request_buy())
    try {
      const buy = yield call(api_public.postStripeSession,order_id);
      if(buy.error){
        yield put(actions.error_buy(buy.error))
        yield put(add_toast({
          error:true,
          text:buy.error
        }))
        // yield put(actions.cancel_buy())
      } else {
        yield put(actions.success_buy(buy.message))
        yield put(actions.set_session(buy.session.id))
        yield put(add_toast({
          error:false,
          text:buy.message
        }))
        // yield put(actions.cancel_buy())
      }
    } catch (error) {
      yield put(actions.error_buy(error))
      yield put(add_toast({
        error:true,
        text:error.toString()
      }))

    }

}

function* postPaymentIntent({intentData}){
  yield put(actions.reset_buy())
  yield put(actions.request_buy())
  try {
    const intent = yield call(api_public.postStripePaymentIntent,intentData);
    if(intent.error){
      yield put (actions.error_buy(intent.error))
      yield put(add_toast({
        error:true,
        text:intent.error
      }))
    } else {
      yield put (actions.success_buy(intent.message))
      yield put(actions.set_intent(intent.intent_id))
      yield put(actions.set_installment_options(intent.available_plans))
      yield put(add_toast({
        error:false,
        text:intent.message
      }))
    }
  }  catch (error) {
    yield put(actions.error_buy(error))
    yield put(add_toast({
      error:true,
      text:error.toString()
    }))
  }
}

function* postConfirmIntent({confirmData}){
  yield put(actions.request_buy())
  try {
    const confirm = yield call(api_public.postStripeConfirmPayment,confirmData)
    if(confirm.error){
      yield put(actions.error_buy(confirm.error))
      yield put(add_toast({
        error:true,
        text:confirm.error
      }))
    } else {
      yield put(actions.success_buy(confirm.message))
      yield put(actions.set_updated_intent(confirm.payment_intent))
      yield put(actions.confirm_stripejs_buy(true))
      // yield put(actions.set_successful_buy())
      yield put(add_toast({
        error:false,
        text:confirm.message
      }))
    }
  } catch (error) {
    yield put(actions.error_buy(error))
    yield put(add_toast({
      error:true,
      text:error.toString()
    }))
  }

}

function* putUpdateIntent({updateData}){
  yield put(actions.request_buy())
  try {
    const update = yield call(api_public.putStripePaymentIntent,updateData)
    if(update.error){
      yield put(actions.error_buy(update.error))
      yield put(add_toast({
        error:true,
        text:update.error
      }))
    } else {
      yield put(actions.success_buy(update.message))
      yield put(actions.set_updated_intent(update.intent))
      yield put(set_order(update.order))
      // yield put(actions.set_successful_buy())
      yield put(add_toast({
        error:false,
        text:update.message
      }))
    }
  } catch (error) {
    yield put(actions.error_buy(error))
    yield put(add_toast({
      error:true,
      text:error.toString()
    }))
  }
}

//Watchers



export function* watchBuySaga() {
    /*
        takeLatest will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
        i.e. concurrent GET_ALL_PRODUCTS actions are allowed
    */
     // takeLatest (queloactiva,queSagaActiva,quepasaenlugardelaaccion)
    yield takeLatest(actions.START_BUY, postDataBuy)
    yield takeLatest(actions.SESSION_BUY, postSessionData)
    yield takeLatest(actions.PAYMENT_INTENT_BUY, postPaymentIntent)
    yield takeLatest(actions.INTENT_CONFIRM_BUY, postConfirmIntent)
    yield takeLatest(actions.START_UPDATE_INTENT_BUY, putUpdateIntent)
}
