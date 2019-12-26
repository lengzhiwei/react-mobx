import React, { Component } from 'react';
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import ReactRouterPropTypes from 'react-router-prop-types';
import './index.scss'
@inject("loginStore")
@observer
class LoginWithPhone extends Component {
    static propTypes = {
        loginStore: MobxPropTypes.observableObject.isRequired,
        history: ReactRouterPropTypes.history.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.fetch(values)
            } else {
                alert('请填写完整信息')
            }
        });
    };
    fetch = async (params) => {
        try {
            await this.props.loginStore.loginWithPhone(params);
            if (this.props.loginStore.res.code === 200) {
                alert(this.props.loginStore.res.profile.nickName)
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    async phoneLogin() {
        try {
            await this.props.loginStore.loginWithPhone();

        } catch (err) {
            console.log(err)
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: '请输入手机号!' }],
                    })(
                        <Input
                            onChange={this.props.login}
                            prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入手机号"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot" href="">
                        Forgot password
              </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
              </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        );
    }
}
const LoginWithPhoneForm = Form.create()(LoginWithPhone);
export default LoginWithPhoneForm;
