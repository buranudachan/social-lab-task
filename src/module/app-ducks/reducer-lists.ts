/**
 * Reducer List
 */

import crowdFundReducer, { CROWD_FUND_INITIAL_STATE } from '../containers/crowdFund/ducks/crowdFundReducer';

const reducerList = {
    crowdFundStateData: crowdFundReducer
};

export default reducerList;

type Action = 'PUSH' | 'POP' | 'REPLACE';
const ActionData: Action = 'POP';
export const reducerInitialState = {
    router: { location: { pathname: '', search: '', state: undefined, hash: '' }, action: ActionData },
    crowdFundStateData: CROWD_FUND_INITIAL_STATE
};