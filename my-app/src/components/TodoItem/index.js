import React from 'react'

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '我是一只快乐的唐老鸭',
            isDone: false,
            isEditor: false,
        }
    }

    render() {
        const _this = this;
        const handChange = (e) => {
            let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
            let item = {
                ...this.props.item,
                [e.target.name]: value
            }
            this.props.Editor(this.props.index, item)
            // this.setState({
            //     ...this.state,
            //     [e.target.name]:value
            // })
        }
        const handDoneClick = () => {
            // this.setState({
            //     ...this.state,
            //     isEditor:true
            // },()=> {
            //     this.refs.editor.focus();
            //     this.refs.editor.value = this.state.text
            // })
            this.props.Editor(this.props.index, {
                ...this.props.item,
                isEditor: true
            }).then(() => {
                // console.log(this.refs.editor)
                this.refs.editor.focus();
                this.refs.editor.value = this.props.item.text;
            })
        }
        const handBlur = () => {
            // this.setState({
            //     ...this.state,
            //     isEditor: false
            // })
            this.props.Editor(this.props.index, {
                ...this.props.item,
                text: this.refs.editor.value,
                isEditor: false
            })
        }

        function isShowEditor() {
            if (!_this.props.item.isEditor) {
                let {item} = _this.props;
                // console.log(item);
                return (
                    <div className='todo_li_body'>
                        <input type="checkbox" name='isDone' value={item.isDone} onChange={handChange}
                               checked={item.isDone}/>
                        <span className={item.isDone ? 'isDone' : ''} onDoubleClick={handDoneClick}>{item.text}</span>
                        <button onClick={() => {
                            _this.props.RemoveOne(_this.props.index)
                        }}>删除
                        </button>
                    </div>
                )
            } else {
                return (
                    <div className="todo_li_editor">
                        <input type="text" ref='editor' name='text' onChange={handChange} onBlur={handBlur}/>
                    </div>
                )
            }
        }

        return (
            <li className='todo_li'>
                {isShowEditor()}
            </li>
        )
    }
}

export default TodoItem