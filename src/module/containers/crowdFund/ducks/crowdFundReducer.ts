/**
 * Crowde List reducer
 */
import { handleActions } from 'redux-actions';
import { crowdFundActions } from './crowdFundActions';

/**
 * Crowde List Component Reducer
 */
export const CROWD_FUND_INITIAL_STATE: any = {
    contributionDetail: [],
    crowdFundDetail: []

};

const crowdFundReducer = handleActions<any, any>(
    {
        [crowdFundActions.Type.INSERT_CROWD_FUND_DETAIL]: (state, action) => {

            return {
                ...state,
                crowdFundDetail: action.payload
            }
        },
        [crowdFundActions.Type.INSERT_CONTRIBUTION_FUND_DETAIL]: (state, action) => {
            return {
                ...state,
                contributionDetail: action.payload
            }
        }
    }, CROWD_FUND_INITIAL_STATE
);

export default crowdFundReducer;