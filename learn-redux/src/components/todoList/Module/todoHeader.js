import React from 'react'
import store from '../../../store'

class TodoHeader extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            text: ' '
        }
    }
    handleChange = (e)=> {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }
    handleDown = (e)=> {
        if(e.keyCode === 13) {
            this.addItem()
        }
    }
    addItem = ()=> {
        let item = {
            text: this.state.text,
            isDone: false,
            isEditor: false
        };
        store.dispatch({type: 'ADD_ITEM',item})
        this.setState({
            text: ' '
        })
    }
    render() {
        return (
            <div className='todo_header'>
                <input type="text" name='text' value={this.state.text} placeholder='你想要做些什么?' onChange={this.handleChange} onKeyDown={this.handleDown}/>
                <button onClick={this.addItem}>添加todo</button>
            </div>
        )
    }
}

export default TodoHeader