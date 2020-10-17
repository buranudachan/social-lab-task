/**
 * Selectors for App Page
 */
import { createSelector } from 'reselect';
import { ApplicationState } from './types';
// import { ApiResponseInterface } from '../services/ducks/types';

// export const fetchMenuStatus = (state: ApplicationState) => state.application.isMenuOpen;
// export const fetchAuthtatus = (state: ApplicationState) => state.application.user.isAuthenticated;
// export const fetchApiResponse = (state: ApplicationState) => state.application.apiStatus;
// export const fetchCurrentPath = (state: ApplicationState) => state.application.currentRoutePath;

const appSelectors = {
    // getMenuStatus: createSelector(
    //     [fetchMenuStatus],
    //     (value: boolean) => value
    // ),
    // getAuthStatus: createSelector(
    //     [fetchAuthtatus],
    //     (value: boolean) => value
    // ),
    // getApiStatus: createSelector(
    //     [fetchApiResponse],
    //     (apiResponse: ApiResponseInterface) => apiResponse
    // ),
    // getCurrentPath: createSelector(
    //     [fetchCurrentPath],
    //     (pathName: string) => pathName
    // )
};

export default appSelectors;