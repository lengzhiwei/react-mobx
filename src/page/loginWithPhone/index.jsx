import React, { Component } from "react";
import { inject, observer, PropTypes as MobxPropTypes } from "mobx-react";
import { Form, Icon, Input, Button } from "antd";
import ReactRouterPropTypes from "react-router-prop-types";
import "./index.scss";
@inject("loginStore")
@observer
class LoginWithPhone extends Component {
  static propTypes = {
    loginStore: MobxPropTypes.observableObject.isRequired,
    history: ReactRouterPropTypes.history.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // this.props.loginStore.getHotwallList();
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.fetch(values);
      } else {
        alert("请填写完整信息");
      }
    });
  };
  fetch = async params => {
    try {
      await this.props.loginStore.loginWithPhone(params);
      if(this.props.loginStore.loginRes.code === 200){
          this.props.history.push('/home')
      } else {
        alert("密码或者账号错误");
        this.props.form.resetFields()
      }
    } catch (error) {
        alert("账号不存在");
        this.props.form.resetFields()
    }
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("phone", {
            rules: [{ required: true, message: "请输入手机号!" }]
          })(
            <Input
              onChange={this.props.login}
              prefix={
                <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="请输入手机号"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请输入密码!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const LoginWithPhoneForm = Form.create()(LoginWithPhone);
export default LoginWithPhoneForm;
