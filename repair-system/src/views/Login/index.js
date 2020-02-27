import React from 'react'
import {NavBar, InputItem, Button,Toast} from 'antd-mobile'
import {createForm} from 'rc-form'
import Cookies from 'js-cookie'   //引入cookie插件
import $axios from '~/Utils'
import './index.scss'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    the_login = (path) => {
        // console.log(this.props.form.getFieldValue('username'))
        // console.log(this.props.form.getFieldValue('password'))
        this.props.history.push(path)
    };

    handleLogin = ()=> {
        $axios.post('/admin/adminUser/login',this.props.form.getFieldValue()).then(res => {
          if(res.data.code == 200) {
              this.props.history.push('/layout');
              let userObj = res.data.data;
              let userJsonObj = JSON.stringify(userObj);
              Cookies.set('user',userJsonObj);  //将用户信息以cookie的形式存储在浏览器端
          }else {
              Toast.info(res.data.msg)
          }
      })
    };
    componentWillMount() {
        // this.handleLogin()   //在dom元素将要挂载的时候去执行这个请求函数
    }

    render() {
        const {getFieldProps} = this.props.form;
        return (
            <div className='from_box'>
                <NavBar mode="dark">维修员登录</NavBar>
                <div className='input_box'>
                    <InputItem
                        {...getFieldProps('username')}
                        placeholder="请输入用户名"
                        clear
                    >用户名</InputItem>
                    <InputItem
                        {...getFieldProps('password')}
                        placeholder="请输入密码"
                        clear
                    >密码</InputItem>
                </div>
                <div className='btn_box'>
                    {/*<Button type='primary' onClick={this.the_login}>登录</Button>*/}
                    <Button type='primary' onClick={()=> {this.the_login('/layout')}}>登录</Button>
                </div>

            </div>
        )
    }
}

const LoginWrapper = createForm()(Login);
export default LoginWrapper