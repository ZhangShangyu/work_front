import React from 'react';
import {Form, Input, Button, message} from 'antd';
import {UserModel} from '../utils/dataModel'

const FormItem = Form.Item;

class Login extends React.Component {
  //  static propTypes = {
  //    formItemLayout: React.PropTypes.object.isRequired,
  //    tailFormItemLayout: React.PropTypes.object.isRequired,
  //    action: React.PropTypes.string.isRequired,
  //    setHeaderState: React.PropTypes.func.isRequired,
  //    setModalVisible: React.PropTypes.func.isRequired,
  // }

  constructor() {
    super();
    this.state = {
      action: 'login'
    }
  }

  handleSubmitLogin(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        var formData = values;
        if (this.props.action == 'login') {
          message.success('登录成功')

          // let param = {
          //   name: formData.username,
          //   password: formData.password,
          // }
          // UserModel.login(param, (data) => {
          //   if (data.code === 200) {
          //     const newState = {
          //       hasLogined: true,
          //       userNickName: formData.username,
          //     }
          //     this.props.setHeaderState(newState);
          //     this.props.form.resetFields();
          //     this.props.setModalVisible(false);
          //     UserModel.storeUser({
          //       username: formData.username,
          //       password: formData.password,
          //       userId: data.data.id,
          //       role: data.data.roleId,
          //     })
          //     message.success('登录成功')
          //   } else {
          //     message.error('账号或密码错误！')
          //   }
          // }, (err) => {
          //   message.error(err)
          // })
        }
      }
    });
  }

  render() {

    let {getFieldDecorator} = this.props.form;
    const formItemLayout = this.props.formItemLayout;
    const tailFormItemLayout = this.props.tailFormItemLayout;

    return (
      <Form onSubmit={this.handleSubmitLogin.bind(this)}>
        <FormItem label='账户' {...formItemLayout} hasFeedback>
          {getFieldDecorator('username', {
            rules: [{
              required: true,
              message: '账号不能为空！',
              whitespace: true
            }]
          })(<Input placeholder='请输入您的账号'/>)}
        </FormItem>
        <FormItem label='密码' {...formItemLayout} hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '密码不能为空！'
              }, {
                // validator: this   .checkConfirm   .bind(this)
              }]
          })(<Input type='password' placeholder='请输入您的密码'/>)}
        </FormItem>
        <FormItem {...tailFormItemLayout} className='mb_0'>
          <Button type='primary' htmlType='submit'>登录</Button>
        </FormItem>
      </Form>
    )
  }
}

export default Login = Form.create({})(Login);