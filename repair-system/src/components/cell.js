import React from 'react'
import PropTypes from 'prop-types'
import './cell.scss'

class Cell extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    getStatusText = (statusNum)=> {
        if(statusNum == 1) {
            return '待派单'
        }else if(statusNum == 2) {
            return '维修中'
        }else if(statusNum == 3) {
            return '已维修'
        }
    };
    render() {
        let {title,date,status} = this.props;


        return (
            <div className='Cell-box'>
                <div className='first-box'>
                    <div className='left-title'>
                        {/*走廊里有一颗口香糖，粘的很*/}
                        {title}
                        <i className='iconfont icon-changyongicon-' style={{fontSize: '16px', fontWeight: 'bold'}}></i>
                    </div>
                    <div className='right_status'>
                        {/*已维修*/}
                        {this.getStatusText(status)}
                    </div>
                </div>
                <div className='second_box'>
                    {/*2020-2-21 17:25:31*/}
                    {date}
                </div>
            </div>
        )
    }
}

Cell.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    status: PropTypes.number
}

export default Cell