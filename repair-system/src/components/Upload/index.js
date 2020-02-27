import React from 'react'
import './index.scss'
import axios from 'axios'
import PropTypes from 'prop-types'   //引入类型校检插件

class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentWillMount() {
        // this.getToken()   //dom元素将要挂载时去请求token数据
    }
    getToken = ()=> {
        //获取token
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
            this.token = res.data.data;
        })
    }
    handleChange = (e)=> {
        //如何利用axios往七牛云上传一张图片
        // console.log(e.target.files[0])

        //利用ajax去上传一张图片
        // 1.新建一个表单对象
        const formData = new FormData;
        formData.append('file','e.target.files[0]');
        formData.append('token','this.token');
        axios.post('https://upload-z1.qiniup.com',formData).then(res => {
            console.log(res.data.url);
            // this.props.success(res.data.url)  //子组件将得到的图片路径传给父组件
        })
    };
    render() {
        return (
            <label className="upload_box">
                <input className='in_put' type="file" onChange={this.handleChange}/>
                <i className= 'iconfont icon-icon-test'></i>
            </label>
        )
    }
}

Upload.propTypes = {
    success: PropTypes.func
}
export default Upload