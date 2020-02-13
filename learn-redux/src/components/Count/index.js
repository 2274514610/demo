import React from 'react'

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    addOne = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    oddAdd = () => {
        if (this.state.count % 2 === 1) {
            this.addOne()
        }
    }
    minus = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    asyncAdd = ()=> {
        setTimeout(()=> {
            this.addOne()
        },1000)
    }
    render() {
        return (
            <div className='count_box'>
                计数器:{this.state.count}
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

export default Index