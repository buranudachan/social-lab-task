import { createAction } from 'redux-actions';


export namespace crowdFundActions {
    export enum Type {
        INSERT_CROWD_FUND_DETAIL = 'INSERT_CROWD_FUND_DETAIL',
        INSERT_CONTRIBUTION_FUND_DETAIL = 'INSERT_CONTRIBUTION_FUND_DETAIL',
    }

    export const triggerCrowdFundDetail = createAction(Type.INSERT_CROWD_FUND_DETAIL);
    export const triggerContributionFundDetail = createAction(Type.INSERT_CONTRIBUTION_FUND_DETAIL, (data: any) => data);

}