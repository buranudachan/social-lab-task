import { Store, createStore, applyMiddleware, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import sagaMiddlewareFactory from 'redux-saga';
import { ApplicationState } from './types';
import reducers from './reducers';
import { reducerInitialState } from './reducer-lists';
import { createBrowserHistory } from 'history';


export const history = createBrowserHistory();

// custom logger
const logger: Middleware = (applicationStore) => (next) => (action) => {
    if (process.env.NODE_ENV !== 'production') {
        // tslint:disable no-console
        console.log('Action Dispatched', action);
        const returnValue = next(action);
        console.log('New State', applicationStore.getState());
        // tslint:enable no-console

        return returnValue;
    }

    return next(action);
};

// Saga Middleware
const sagaMiddleware = sagaMiddlewareFactory();
const routeMiddleware = routerMiddleware(history);
let middleware;

if (process.env.NODE_ENV !== 'production') {
    middleware = applyMiddleware(logger, sagaMiddleware, routeMiddleware);
    middleware = composeWithDevTools(middleware);
} else {
    middleware = applyMiddleware(sagaMiddleware, routeMiddleware);
}

const store: Store<ApplicationState> = createStore(reducers(history), reducerInitialState, middleware);


export default store;