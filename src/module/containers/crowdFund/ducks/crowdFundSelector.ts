/**
 * Selectors for Crowd Fund Page
 */
import { createSelector } from 'reselect';
import { ApplicationState } from '../../../app-ducks/types';
import { CrowdFundState } from './types';

export const fetchCrowdFundData = (state: ApplicationState) => state.crowdFundStateData;

const crowdFundSelectors = {
    getCrowdFundData: createSelector(
        [fetchCrowdFundData],
        (data: CrowdFundState) => data
    )
};

export default crowdFundSelectors;