/**
 * App actions
 */
import { createAction } from 'redux-actions';

export namespace appActions {
    export enum Type {

        SET_CURRENT_PATH = 'SET_CURRENT_PATH'
    }

    export const setCurrentPath = createAction(Type.SET_CURRENT_PATH);
}