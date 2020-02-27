import React from 'react'
import $axios from '~/Utils'
import Cookies from 'js-cookie'
import Cell from '~/components/cell'

class Send extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            repairArr: [
                {
                    title: '马桶坏了',
                    date: '2019年12月31日  14:30:21',
                    status: 2
                }
            ]
        }
    }

    getDate = () => {
        let userString = Cookies.get('user');
        let userJson = JSON.parse(userString);   //把字符串转为对象
        // $axios.get('/admin/repairRecord',{   //根据存储在cook中的id,和状态status=2，去进行查询请求
        //     params: {
        //         repair_man: userJson.id,
        //         status: 2
        //     }
        // }).then(res => {
        //     this.setState({
        //         repairArr: res.data
        //     })
        // })
    };

    componentWillMount() {
        // this.getDate()    //在dom元素将要挂载时，去请求数据
    }

    render() {
        let {repairArr} = this.state
        return (
            <div className="send_box">
                {
                    repairArr.map((item, index) => {
                        return (
                            <Cell title={item.title} date={item.date} key={index} status={item.status}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default Send