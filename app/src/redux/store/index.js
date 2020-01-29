import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer  from '../reducers';
import rootSaga from '../../sagas';
import {saveState,loadState} from './storeActions';

let state = {}

if(process.env.REACT_APP_PERSIST_STATE){
  state = loadState()
}

export const store=(initialState = state)=> {

    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [
        sagaMiddleware
    ];

    const enhancers = [
        applyMiddleware(...middlewares)
    ];

    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
            typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                shouldHotReload: false,
            })
            : compose;

            /**
             *  rootReducer - receive all the reducers
             *  initialState of the store
             *  enhancers
             */

    const store = createStore(
        rootReducer(),
        initialState,
        composeEnhancers(...enhancers)
    );


    sagaMiddleware.run(rootSaga);
    if(process.env.REACT_APP_PERSIST_STATE){
      store.subscribe(()=>saveState(store.getState()))
    }

    return store;
}
