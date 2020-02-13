import React from 'react'

class Index extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            text: ''
        }
    }

    handChange = (e)=> {
        this.setState({
            text: e.target.value
        })
    }
    keyCodeAdd = (e)=> {
        if(e.keyCode === 13){
            let obj = {};
            obj.text = this.state.text;
            obj.isDone = false;
            obj.isEditor = false;
            this.props.addItem(obj)
        }
    }

    render() {
        const {text} = this.state;
      return (
          <div>
              <div className='todo_header'>
                  <input type="text" placeholder='你今天要做什么呢?'
                         onChange={this.handChange} value={text} onKeyDown={this.keyCodeAdd}/>
              </div>
          </div>
      )
    }
}

export default Index;