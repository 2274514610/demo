import React from 'react'
import TodoHeader from './Module/todoHeader'
import TodoBody from "./Module/todoBody"
// import TodoBody from './Module/react-redux_todoBody'
import TodoFloor from './Module/todoFloor'

class TodoList extends React.Component {
    constructor (props) {
        super (props)
        this.state = {}
    }
    render() {
        return (
            <div className='todoList_box'>
                <h1>TodoList</h1>
                <TodoHeader/>
                <TodoBody/>
                <TodoFloor/>
            </div>
        )
    }
}

export default TodoList