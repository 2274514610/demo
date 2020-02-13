import React from 'react'
import TodoItem from './todoItem'
import store from '../../../store'
import {connect} from 'react-redux'

class TodoBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const storeState = store.getState();
        return (
            <div className= 'todo_body'>
                <ul>
                    {
                        this.props.arr.map((item,index)=> {
                            if(this.props.status === 1) {  //全部
                                return <TodoItem item={item} index={index} key={index}/>
                            }else if(this.props.status === 2) {  //未完成
                                if(!item.isDone) {
                                    return <TodoItem item={item} index={index} key={index}/>
                                }else {
                                    return null
                                }
                            }else if(this.props.status === 3) {  //已完成
                                if(item.isDone) {
                                    return <TodoItem item={item} index={index} key={index}/>
                                }else {
                                    return null
                                }
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}
const TodoBody_Connect = connect(
    state => {
        return {
            ...state
        }
    }
)(TodoBody);

export default TodoBody_Connect