import React from 'react'

class Floor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handChange = (num)=> {
        this.props.ChangeStatus(num)
    }
    render() {
        let arr = this.props.arr;
        console.log(arr)
        let num = 0;
        arr.map((item)=> {
            if(!item.isDone) {
               num++
            }
        });
        let doneArr = arr.filter(item => {
            return item.isDone
        })
        return (
            <div className='floor_box'>
                <span>剩余{num}项</span>
                <button onClick={()=>this.handChange(1)}>全部</button>
                <button onClick={()=>{this.handChange(2)}}>未完成</button>
                <button onClick={()=>{this.handChange(3)}}>已完成</button>
                {
                    doneArr.length > 0 ?  <button onClick={this.props.Remove}>清除已完成</button> : null
                }

            </div>
        )
    }
}
export default Floor