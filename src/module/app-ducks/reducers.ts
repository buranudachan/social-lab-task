import { ApplicationState } from './types';
import { combineReducers, Reducer } from 'redux';
import reducerList from './reducer-lists';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

/**
 * Combine reducers
 */
const reducers: (history: History) => Reducer<ApplicationState> = (history: History) => combineReducers<ApplicationState>({
    router: connectRouter(history),
    ...reducerList
});

export default reducers;