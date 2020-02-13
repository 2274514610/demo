import React from 'react'
import TodoItem from './todoItem'
import store from '../../../store'

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
                        storeState.arr.map((item,index)=> {
                            if(storeState.status === 1) {  //全部
                                return <TodoItem item={item} index={index} key={index}/>
                            }else if(storeState.status === 2) {  //未完成
                                if(!item.isDone) {
                                    return <TodoItem item={item} index={index} key={index}/>
                                }else {
                                    return null
                                }
                            }else if(storeState.status === 3) {  //已完成
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

export default TodoBody