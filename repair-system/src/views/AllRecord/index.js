import React from 'react'
import Cell from '~/components/cell'
import $axios from '~/Utils'

class AllRecord extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [
                {
                    title: '马桶坏了',
                    date: '2019年12月31日  14:30:21',
                    status: 1
                },
                {
                    title: '水管漏水',
                    date: '2020年1月10日  16:12:00',
                    status: 2
                },
                {
                    title: '墙皮脱落',
                    date: '2020年2月24   12:10:13',
                    status: 1
                },
                {
                    title: '花盆破裂',
                    data: '2019年2月13日  12:10:20',
                    status: 3
                },
                {
                    title: '地板砖裂缝',
                    date: '2018年2月12日  18:10:28',
                    status: 3
                }
            ]
        }
    }
    getData = () => {
        $axios.get().then(res => {
            console.log(res);
            this.setState({
                arr: res.data
            })
        })
    }

    componentWillMount() {
        // this.getData();   //在dom元素将要挂载的时候去请求数据
    }

    render() {
        let arr = this.state.arr;
        return (
            <div className="all_record">
                {
                    arr.map((item,index) => {
                         return <Cell title={item.title} date={item.date} key={index} status={item.status}/>
                    })
                }

            </div>
        )
    }
}

export default AllRecord