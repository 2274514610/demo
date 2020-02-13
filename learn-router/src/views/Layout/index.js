import React from 'react'
import {Link} from 'react-router-dom'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handJump = (path)=> {
        this.props.history.push(path)
    }

    render() {
        return (
            <div className='Layout'>
                <h1 className='title'>欢迎来到react的世界</h1>
                <aside>
                    <ul>
                        <li className= 'route_box'>
                           <Link to='/layout'>首页</Link>
                        </li>
                        <li className= 'route_box'>
                            <Link to='/layout/two'>第二页</Link>
                        </li>
                        <li className= 'route_box'>
                            <Link to='/layout/404'>404页面</Link>
                        </li>
                        <li>
                            <button onClick={()=> {this.handJump('/layout')}}>跳转到首页</button>
                        </li>
                        <li>
                            <button onClick={()=> {this.handJump('/layout/two')}}>跳转到第二页</button>
                        </li>
                    </ul>
                </aside>
                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        )

    }
}

export default Layout