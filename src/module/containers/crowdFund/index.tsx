import React, { FormEvent } from "react";
import { Button, Card, Row, Col, Form, Input } from "antd";
import { ApplicationState } from "../../app-ducks/types";
import { omit } from "lodash";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { appActions } from "../../app-ducks/appActions";
import crowdFundSelectors from "./ducks/crowdFundSelector";
import { crowdFundActions } from "./ducks/crowdFundActions";
import FormItem from "antd/lib/form/FormItem";
import { CrowdFundComponentProps } from "./ducks/types";
import {
    CheckOutlined
} from "@ant-design/icons";
import MyGreenCityFund from "./components/myGreenCityFund";
class CrowdFund extends React.Component<CrowdFundComponentProps, any> {
    constructor(props: CrowdFundComponentProps) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            isMyCityGreeFund: false
        }
    }

    public render() {
        console.log('ksdjflkdsjfldsf', this.props);
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return (
            <React.Fragment>
                {!this.state.isMyCityGreeFund &&
                    <div className="gx-app-login-wrap">
                        <div className="gx-app-login-container gx-mb-10">
                            <div ><h3 className="textCenter textColor">Create Your Crowd Fund </h3></div>

                            <Card>
                                <Form>
                                    <FormItem {...formItemLayout}
                                        label={
                                            <span>
                                                Name of the fund&nbsp;
                                        </span>
                                        }>
                                        {getFieldDecorator("nameOfFund", {
                                            rules: [
                                                {
                                                    required: false,
                                                },
                                            ],
                                        })(<Input placeholder="e.g. My green city fund" />)}
                                    </FormItem>
                                    <FormItem {...formItemLayout}
                                        label={
                                            <span>
                                                Cause of the fund&nbsp;
                                        </span>
                                        }>
                                        {getFieldDecorator("causeOfFund", {
                                            rules: [
                                                {
                                                    required: false,
                                                },
                                            ],
                                        })(<Input type="text" placeholder="e.g. Plant empty spaces with trees and shrubs" />)}
                                    </FormItem>
                                    <FormItem {...formItemLayout}
                                        label={
                                            <span>
                                                Total Amound <i className="fa fa-inr" style={{ fontSize: '20px' }}></i>&nbsp;
                                        </span>
                                        }>
                                        {getFieldDecorator("totalAmout", {
                                            rules: [
                                                {
                                                    required: false,
                                                },
                                            ],
                                        })(<Input type="text" placeholder="25000" />)}
                                    </FormItem>
                                    <br></br>
                                    <Row>
                                        <Col span={19}></Col>
                                        <Col span={5}>

                                            <Button type="primary"
                                                onClick={this.handleSubmit}
                                            ><CheckOutlined style={{ fontSize: '16px', color: 'green' }} />
                                        Create
                                    </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card>
                        </div>
                    </div >}
                {this.state.isMyCityGreeFund && <MyGreenCityFund {...this.props}
                    contributionDetail={this.props.contributionDetail}
                    triggerContributionFundDetail={this.props.actions.triggerContributionFundDetail} />}
            </React.Fragment >
        );
    }
    private handleSubmit(e: FormEvent) {
        e.preventDefault();
        this.props.form &&
            this.props.form.validateFields((err: any, values: any) => {
                if (!err) {
                    console.log(values)
                    this.setState({
                        isMyCityGreeFund: true
                    });
                    this.props.actions.triggerCrowdFundDetail(values);
                }
            });
    }
}
const mapStateToProps = (state: ApplicationState) => {
    return {
        ...crowdFundSelectors.getCrowdFundData(state),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: {
            ...bindActionCreators(omit(crowdFundActions, ["Type"]) as any, dispatch),
            setRoute: (route: string) => dispatch(appActions.setCurrentPath(route)),
        },
    };
};
const CrowdForm = Form.create<CrowdFundComponentProps>()(CrowdFund);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CrowdForm);
