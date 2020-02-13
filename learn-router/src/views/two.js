import React from 'react'
import {Link} from 'react-router-dom'

class Two extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>我是第二个页面</h1>
                <Link to='/'>跳转回第一个页面</Link>
            </div>
        )
    }
}

export default Two