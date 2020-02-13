import React from 'react'
import store from '../../../store'

class TodoFloor extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    handleStatus = (num)=> {
       store.dispatch({type: 'CHANGE_STATUS',status: num})
    }
    render() {
        return (
            <div className='todo_floor'>
                <button onClick={()=> {this.handleStatus(1)}}>全部</button>
                <button onClick={()=> {this.handleStatus(2)}}>未完成</button>
                <button onClick={()=> {this.handleStatus(3)}}>已完成</button>
            </div>
        )
    }
}

export default TodoFloor