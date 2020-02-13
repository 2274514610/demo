import React from 'react'
import store from '../../../store'

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    toggleDone = (index)=> {
        store.dispatch({type: 'TOGGLE',index})
    }
    removeTodo = (index)=> {
        store.dispatch({type: 'REMOVE',index})
    }
    DoubleEditor = ()=> {
        const index = this.props.index
        store.dispatch({type: 'TOGGLE_EDITOR',index})
    }
    handleChange = (e)=> {
        const index = this.props.index
        store.dispatch({type: 'HANDLE_CHANGE',index,text: e.target.value})
    }
    render() {
        const {item,index} = this.props
        return (
            <div className='todo_item'>
                <li >
                    {
                        !item.isEditor ? (<div>
                            {index + 1}.<span onClick={()=> {this.toggleDone(index)}}   onDoubleClick={this.DoubleEditor}
                                              style={{cursor:"pointer"}} className={item.isDone ? 'done' : ''}>{item.text}</span>
                            <button onClick={()=> {this.removeTodo(index)}}>删除</button>
                        </div>) : (<div>
                            <input type="text" value={item.text} ref='input_dom'
                                   onChange={this.handleChange} onBlur={this.DoubleEditor}/>
                        </div>)
                    }
                </li>

            </div>
        )
    }
}

export default TodoItem