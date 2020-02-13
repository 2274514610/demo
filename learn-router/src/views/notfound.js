import React from 'react'

class Notfound extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1 style={{color:'red'}}>404页面找不到了</h1>
            </div>
        )
    }
}

export default Notfound