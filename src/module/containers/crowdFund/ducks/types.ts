import { FormComponentProps } from 'antd/lib/form';


export interface CrowdFundComponentProps extends CrowdFundState, FormComponentProps {
    actions: CrowdFundActionsInterface;
}
export interface CrowdFundState {
    contributionDetail: Array<any>;
    crowdFundDetail: Array<any>

}
interface CrowdFundActionsInterface {
    triggerCrowdFundDetail(crowdDetail: any): void;
    triggerContributionFundDetail(contributionDetail: any): void;
}
export interface MyGreenCityFundComponent extends AddContributeComponent {
    contributionDetail: Array<any>;
    triggerContributionFundDetail(contributionDetail: any): void;

}


export interface AddContributeComponent extends FormComponentProps {
    triggerContributionFundDetail(contributionDetail: any): void;
}