import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Count from './components/Count'
import ReduxWidthCount from "./components/ReduxWidthCount";
import TodoList from './components/todoList'

function App() {
    return (
        <Router>
            <div className="App">
                <Route path='/count' component={Count}></Route>
                <Route path='/reduxWidthCount' component={ReduxWidthCount}></Route>
                <Route path='/' component={TodoList}></Route>
            </div>
        </Router>

    );
}

export default App;
