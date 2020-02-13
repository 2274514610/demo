import React from 'react'
import {Link} from 'react-router-dom'

class One extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div>
                <h1>我是第一个页面</h1>
                <Link to='/two'>跳转到第二个页面</Link>
            </div>
        )


    }
}

export default One