import {put, call, takeLatest} from 'redux-saga/effects';
import * as actions from '../redux/actions/offers-actions';
import {add_toast} from '../redux/actions/toasts-actions';
import {api_public} from '../services';

function* postDataOffer({dataOffer}){
  yield put(actions.request_offer())
  try {
    const promo = yield call(api_public.postOffer,dataOffer);
    if(promo.error){
      yield put(actions.error_offer(promo.error))
      yield put(add_toast({
        error:true,
        text:promo.error
      }))
      yield put(actions.cancel_offer())
    } else {
      yield put(actions.success_offer(promo.message))
      yield put(add_toast({
        error:false,
        text:promo.message
      }))
      yield put(actions.cancel_offer())
    }
  } catch (error) {
    yield put(actions.error_offer(error))
    yield put(add_toast({
      error:true,
      text:error
    }))
    yield put(actions.cancel_offer())
  }
}

function* verifyCouponOffer({couponURL}){
  yield put(actions.request_offer())
  try {
    const verify = yield call(api_public.verifyOffer,couponURL);
    if(verify.error){
      yield put(actions.error_offer(verify.error))
      yield put(add_toast({
        error:true,
        text:verify.error
      }))
      yield put(actions.cancel_offer())
    } else {
      yield put(actions.success_offer(verify.message))
      yield put(actions.set_coupon_offer(verify.coupon))
      yield put(add_toast({
        error:false,
        text:verify.message
      }))
      yield put(actions.cancel_offer())
    }
  } catch (error) {
    yield put(actions.error_offer(error))
    yield put(add_toast({
      error:true,
      text:error
    }))
    yield put(actions.cancel_offer())
  }
}

export function* wacthOfferData(){
  yield takeLatest(actions.START_OFFER,postDataOffer)
  yield takeLatest(actions.VERIFY_COUPON_OFFER,verifyCouponOffer)
}
