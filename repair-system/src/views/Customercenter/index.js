import React from 'react'
import './index.scss'
import Cookies from 'js-cookie'  //引入cook插件
import $axios from '~/Utils'
import {Button} from 'antd-mobile'

class CustomerCenter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            avatar: '',
            await_repair: '',
            done_repair: '',
            user_ID: ''
        }
    }

    getUserData = () => {
        let userData = Cookies.get('user');   //获取存储在浏览器端的cookie
        let userObj = JSON.parse(userData);
        this.setState({
            username: userObj.nickName || userObj.phone,
            avatar: userObj.avatar,
            userID: userObj.id
        },()=> {
            this.getRepairData();
        })
    };

    getRepairData = () => {
        $axios.get('/admin/repairRecord/userRecord', {
            params: {
                userID: this.state.user_ID
            }
        }).then(res => {
            this.setState({
                await_repair: res.data.await_repair,
                done_repair: res.data.done_repair
            })
        })
    };

    LoginOut = ()=> {
      this.props.history.push('/');
      Cookies.remove('user');   //删除浏览器中存储的cookie
    };

    componentWillMount() {
        // this.getUserData()    //在dom元素将要挂载的时候，执行
    }

    render() {
        const {username,avatar,await_repair,done_repair,user_ID} = this.state;
        return (
            <div className='customer_center_box'>
                <div className="header_box">
                    <div className="username">
                        15638159973
                    </div>
                    <div className="avatar">
                        <img src="http://pbl.yaojunrong.com/FvhVRiU2WZDDfQ6IKBYPWGl6CEgr" alt=""/>
                    </div>
                </div>
                <div className='content_box'>
                    <div className="await_repair">
                        <div className="await">
                            待维修
                        </div>
                        <div className='await_number'>
                            2
                        </div>
                    </div>
                    <div className="done_repair">
                        <div className="done">
                            已完成维修
                        </div>
                        <div className='done_number'>
                            2
                        </div>
                    </div>
                </div>
                <div className="floor_box">
                    <Button type='warning' onClick={this.LoginOut}>退出登录</Button>
                </div>
            </div>
        )
    }
}

export default CustomerCenter