import {put,call,takeLatest} from 'redux-saga/effects';
import * as actions from '../redux/actions/products-actions';
// import {add_toast} from '../redux/actions/toasts-actions';
import {api_public} from '../services';

function* getGroupProducts({productQueries}){
  yield put(actions.request_product())
  try {
    const products = yield call(api_public.getProducts,productQueries)
    if(products.error){
      yield put (actions.error_product(products.error))
      yield put(actions.cancel_product())
    } else {
      yield put(actions.success_product(products.message))
      yield put(actions.set_products(products.products))
      yield put(actions.cancel_product())
      // yield put(add_toast({
      //   error:false,
      //   text:products.message
      // }))
    }
  } catch (error) {
    yield put (actions.error_product(error))
    yield put(actions.cancel_product())
  }

}

export function* watchProductsSaga(){
  yield takeLatest(actions.START_GET_PRODUCTS,getGroupProducts)
}
