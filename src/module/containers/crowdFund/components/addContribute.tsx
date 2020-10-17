import React, { FormEvent } from "react";
import { Col, Row, Form, Input, Button, Modal } from "antd";
import { AddContributeComponent } from "../ducks/types";
import FormItem from "antd/lib/form/FormItem";
import {
    CheckOutlined
} from "@ant-design/icons";
import moment from "moment";
class AddContribute extends React.Component<
    AddContributeComponent,
    any
    > {
    constructor(props: AddContributeComponent) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
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
                <Form>
                    <Row>
                        <Col span={10}>
                            <FormItem {...formItemLayout}
                                label={
                                    <span>
                                        Name&nbsp;
                                        </span>
                                }>
                                {getFieldDecorator("name", {
                                    rules: [
                                        {
                                            required: false,
                                        },
                                    ],
                                })(<Input />)}
                            </FormItem>
                        </Col>
                        <Col span={10}>
                            <FormItem {...formItemLayout}
                                label={
                                    <span>
                                        Amount&nbsp;
                                        </span>
                                }>
                                {getFieldDecorator("amount", {
                                    rules: [
                                        {
                                            required: false,
                                        },
                                    ],
                                })(<Input />)}
                            </FormItem>
                        </Col>
                        <Col span={4}>
                            <Button type="primary"
                                onClick={this.handleSubmit}
                            ><CheckOutlined style={{ fontSize: '16px', color: 'green' }} />
                                        Contribute
                                    </Button>
                        </Col>
                    </Row>

                </Form>
            </React.Fragment>
        );
    }
    private handleSubmit(e: FormEvent) {
        e.preventDefault();
        this.props.form &&
            this.props.form.validateFields((err: any, values: any) => {
                if (!err) {
                    values['date'] = moment().format("YYYY-MM-DD");
                    this.props.triggerContributionFundDetail(values);
                    this.success();
                }
            });
    }
    success = () => {
        const modal = Modal.success({
            title: 'Congratulations!',
            content: 'We have achieved you targer for funding!',
        });
        setTimeout(() => modal.destroy(), 1000);
    };
}
const form = Form.create<AddContributeComponent>()(AddContribute);

export default form;
