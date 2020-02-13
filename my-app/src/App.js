import React from 'react';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import Floor from './components/Floor'
import './index.scss'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [
                {
                    text: '学习vue',
                    isDone: false,
                    isEditor: false
                },
                {
                    text: '学习React',
                    isDone: false,
                    isEditor: false
                },
                {
                    text: '学习node',
                    isDone: true,
                    isEditor: false
                }
            ],
            status: 1,   //1:全部  2:未完成  3:已完成
        };
    }
    ChangeStatus = (status)=> {
        this.setState({
            status:status
        })
    }
    Remove = ()=> {
        let newArr = this.state.arr.filter((item)=> {
            return !item.isDone
        });
        this.setState({
            arr: newArr
        })
    }
    addItem = (obj)=> {
        let newArr = [...this.state.arr]
        newArr.push(obj)
       this.setState({
           arr: newArr
       })
    }
    RemoveOne = (index)=> {
        let newArr = [...this.state.arr];
        newArr.splice(index,1);
        this.setState({
            arr: newArr
        })
    }
    Editor = (index,item)=> {
        return new Promise((resolve,reject)=> {
            let newArr = [...this.state.arr];
            newArr[index] = item;
            this.setState({
                arr: newArr
            },()=> {
                resolve();
            })
        })
    }
    render() {
        return (
            <div className="App">
                <h1 style={{textAlign: 'center'}}>todoList</h1>
                <div className='todo_content'>
                    <Header addItem={this.addItem}/>
                    <ul className='todo_li_box'>
                        {
                            this.state.arr.map((item,index)=> {
                                if(this.state.status === 1) {
                                    return <TodoItem item={item} key={index} index={index}
                                                     RemoveOne={this.RemoveOne} Editor={this.Editor}/>
                                }else if(this.state.status === 2) {
                                    if(!item.isDone) {
                                        return <TodoItem item={item} key={index} index={index}
                                                         RemoveOne={this.RemoveOne} Editor={this.Editor}/>
                                    }else{
                                        return null
                                    }
                                }else if(this.state.status === 3){
                                    if(item.isDone) {
                                        return <TodoItem item={item} key={index} index={index}
                                                         RemoveOne={this.RemoveOne} Editor={this.Editor}/>
                                    }else {
                                        return null
                                    }
                                }
                            })
                        }
                    </ul>
                    <Floor ChangeStatus={this.ChangeStatus} arr={this.state.arr} Remove={this.Remove}/>
                </div>
            </div>
        )
    }
}

export default App;
