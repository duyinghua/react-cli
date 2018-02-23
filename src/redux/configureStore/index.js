import {
    combineReducers,
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import {createLogger} from 'redux-logger';
import {routerReducer, routerMiddleware} from 'react-router-redux'

const logger = createLogger({
    level: 'info',
    logger: console,
    collapsed: true
})
const createStoreWithMiddleware = process.env.NODE_ENV === 'production' ? applyMiddleware(
    thunk
) : applyMiddleware(
    thunk, logger
)

const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    }),
    createStoreWithMiddleware
)
export default store