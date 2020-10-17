/**
 * Global Interface
 */

import { RouterState } from 'connected-react-router';
import { CrowdFundState } from '../containers/crowdFund/ducks/types';

// Application State
export interface ApplicationState {
    //
    router: RouterState;
    crowdFundStateData: CrowdFundState;
}
