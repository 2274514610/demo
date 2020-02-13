import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//纯Redux写法
// import store from './store'
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// store.subscribe(()=> {
//     ReactDOM.render(<App />, document.getElementById('root'));
// })

//Redux 配合 React-Redux的写法  provider是提供者的意思，提供一个store(仓库)
import store from './store'
import {Provider} from 'react-redux'
ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>,document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
