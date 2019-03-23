import React, { Component } from "react";
import {withRouter} from "react-router-dom"
import "./login.less";
import {
    Form, Icon, Input, Button, Checkbox, Card,message
} from 'antd';
class Login extends Component {
    // login(e) {
    //     console.log(this)
    //     let data = this.props.form.getFieldsValue()
    //     //console.log(data)
    //     e.preventDefault();
    //     this.props.form.validateFields((err, values) => {
    //         if (!err) {
    //             console.log('正确信息 ', values);
    //             message.success("登录成功",1,()=>{
    //                     this.props.history.push("/admin")
    //                 }
    //             )
    //         }else{
    //             console.log("错误信息",err)
    //         }
    //     })
    // }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('正确信息 ', values);
                message.success("登录成功",1,()=>{
                    console.log(this.props)
                        this.props.history.push("/admin")
                    }
                )
          }
        });
      }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <Card style={{ width: 350 }} title="登录界面" className="login-Card"
                    extra={<a href="#">More</a>}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' },
                                { max: 18, message: "不能超过18位" },
                                { min: 3, message: "不能小于3位" },
                                { pattern: /^[a-z]/i, message: "首字母英文开头" }
                                ],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator("password",
                                {
                                    rules: [{ required: true, message: 'Please input your Password!' },
                                    { min: 5, message: "不能小于5位" },
                                    { pattern: /^.{6,18}$/, message: "6-18位任意字符" }
                                    ]
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}

                        </Form.Item>
                        <Form.Item>


                        <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default  withRouter( Form.create()(Login) );