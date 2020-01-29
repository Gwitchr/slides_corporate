import { all } from 'redux-saga/effects';
// import { watchPostDataLead } from './lead-sagas';
import { watchPostSubscriber } from './subscriber-sagas';
import { watchContactData } from './contact-sagas';
import { watchPostRegistry } from './registry-sagas';
import { watchBuySaga } from './buy-sagas';
import { watchOrdersSaga } from './orders-sagas';
import { watchProductsSaga } from './products-sagas';
import { wacthOfferData } from './offers-sagas';
import { watchBeslidesData } from './beslides-sagas';


export function* greetingsSaga() {
//    yield console.log('Hi there!');
yield 1;
// console.log('hi')
}

export default function* rootSaga() {
    console.log('redux saga setup ok');
    yield all([
        //add your sagas here:
        greetingsSaga(),
        watchPostSubscriber(),
        watchContactData(),
        watchPostRegistry(),
        watchBuySaga(),
        watchOrdersSaga(),
        watchProductsSaga(),
        wacthOfferData(),
        watchBeslidesData()
    ]);
};
