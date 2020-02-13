import React from 'react'

class Index extends React.Component {
    constructor(props) {
        super (props)
    }
    render() {
        return (
            <div>
                <h1>用户的ID是:{this.props.match.params.id}</h1>
            </div>
        )
    }
}

export default Index