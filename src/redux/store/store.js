import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const middlewares = [logger];

const middlewaresCombined = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, middlewaresCombined)