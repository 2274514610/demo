import React from 'react'
import store from '../../store'

class ReduxWidthCount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    addOne = ()=> {
        store.dispatch({type: 'INCREMENT'})
    }
    minus = ()=> {
        store.dispatch({type: 'DECREMENT'})
    }
    oddAdd = ()=> {
        let state = store.getState().count;
        if(state % 2 === 1) {
            this.addOne()
        }
    }
    asyncAdd = ()=> {
        setTimeout(()=> {
            this.addOne()
        },1000)
    }
    render() {
        return (
            <div className='count_box'>
                计数器:{store.getState().count}
                <br/>
                {/*{' '} 增加空格*/}
                <button onClick={this.addOne}>点我+1</button>
                {' '}
                <button onClick={this.oddAdd}>increment when odd</button>
                {' '}
                <button onClick={this.minus}>点我-1</button>
                {' '}
                <button onClick={this.asyncAdd}>async 增加</button>
                {' '}
            </div>
        )
    }
}

export default ReduxWidthCount;