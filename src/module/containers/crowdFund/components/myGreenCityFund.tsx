import React from "react";
import { Card, Progress, Table } from "antd";
import { MyGreenCityFundComponent } from "../ducks/types";
import AddContribute from "../components/addContribute"


class MyGreenCityFund extends React.Component<
    MyGreenCityFundComponent,
    any
    > {
    render() {
        const columns: any = [
            {
                title: "Name ",
                className: "gx-text-center",
                dataIndex: "name",
                key: "9"

            },
            {
                title: "Amount ",
                className: "gx-text-center",
                dataIndex: "amount",
                key: "10"
            },
            {
                title: "Date",
                className: "gx-text-center",
                dataIndex: "date",
                key: "11"
            }];
        return (
            <div className="margin">
                <div>
                    <h3 className="textCenter textColor">Create Your Crowd Fund </h3>
                    <h3 className="textCenter">Plant empty spaces with trees and shrubs </h3>
                    <h3 className="textCenter textColor"><i className="fa fa-inr" style={{ fontSize: '20px' }} /> 250000</h3>
                </div>
                <Card>
                    <Progress percent={60} strokeWidth={45} showInfo={false} status="success" />
                    <h3 className="textCenter" style={{ color: 'green' }}><i className="fa fa-inr" style={{ fontSize: '20px' }} /> 250000</h3>
                </Card>
                <Card>
                    <AddContribute triggerContributionFundDetail={this.props.triggerContributionFundDetail} />
                </Card>
                <Card>
                    <h3 className="textCenter textColor">Contributions</h3>
                    <Table columns={columns} dataSource={[this.props.contributionDetail]} bordered />
                </Card>
            </div>
        );
    }
}

export default MyGreenCityFund;
