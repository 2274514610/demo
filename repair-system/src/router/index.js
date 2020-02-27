import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from '../views/Login'
import Layout from '../views/Layout'
import AllRecord from '../views/AllRecord'
import Send from '../views/Send'
import Complete from '../views/Complete'
import CustomerCenter from '../views/Customercenter'
import TestUpload from '../views/TestUpload'

class RouterComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Login}></Route>
                    <Route path='/layout' render={(props)=> (  //props是路由参数 {...props}是es6语法
                        <Layout {...props}>
                            <Switch>
                                <Route path='/layout' exact component={AllRecord}></Route>
                                <Route path='/layout/send' component={Send}></Route>
                                <Route path='/layout/complete' component={Complete}></Route>
                                <Route path='/layout/customercenter' component={CustomerCenter}></Route>
                                <Route path= '/layout/testupload' component={TestUpload}></Route>
                            </Switch>
                        </Layout>
                    )}></Route>
                </Switch>
            </Router>
        )
    }
}

export default RouterComponent