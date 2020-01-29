import { combineReducers } from 'redux';

import {subscribeReducer} from './subscribe-reducer';
import {contactReducer} from './contact-reducer';
import {registryReducer} from './registry-reducer';
import {buyReducer} from './buy-reducer';
import {ordersReducer} from './orders-reducer';
import {productsReducer} from './products-reducer';
import {toastsReducer} from './toasts-reducer';
import {offersReducer} from './offers-reducer';
import {beslidesReducer} from './beslides-reducer';


const rootReducer = () => combineReducers({
    subscribeReducer,
    contactReducer,
    registryReducer,
    buyReducer,
    ordersReducer,
    productsReducer,
    toastsReducer,
    offersReducer,
    beslidesReducer
});


export default rootReducer;
