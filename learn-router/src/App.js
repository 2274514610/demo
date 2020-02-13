import React from 'react';
import One from './views/one'
import Two from './views/two'
import Person from './views/person'
import NotFound from './views/notfound'
import {BrowserRouter as Router, Route, Link, Redirect, Switch,Prompt} from 'react-router-dom'
import Layout from './views/Layout'

function App() {
    return (
        <Router>
            <div className="App">
                {/*<Prompt when={true} message='您确定要离开当前页面吗？'></Prompt>*/}
                <header>
                    <ul>
                        {/*<li><Link to='/'>首页</Link></li>*/}
                        {/*<li><Link to='/two'>第二页</Link></li>*/}
                        {/*<li>*/}
                        {/*    <Route path='/' exact={true} children={(props)=> {*/}
                        {/*        return (*/}
                        {/*            <div>*/}
                        {/*                {JSON.stringify(props)}*/}
                        {/*                <Link to='/' className={props.match ? 'active' : ''}>首页</Link>*/}
                        {/*            </div>*/}
                        {/*        )*/}
                        {/*    }}>*/}
                        {/*    </Route>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <Route path='/two' children={(props)=> {*/}
                        {/*        return (*/}
                        {/*            <div>*/}
                        {/*                {JSON.stringify(props)}*/}
                        {/*                <Link to='/two' className={props.match ? 'active' : ''}> 第二页</Link>*/}
                        {/*            </div>*/}
                        {/*        )*/}
                        {/*    }}>*/}

                        {/*    </Route>*/}
                        {/*</li>*/}
                    </ul>
                    <hr/>
                </header>
                <Switch>
                    <Route path='/' exact component={One}></Route>
                    <Route path='/two' component={Two}></Route>
                    <Route path='/Layout' render={(props)=> (
                        <Layout history={props.history}>
                            <Switch>
                                <Route path='/layout' exact component={One}></Route>
                                <Route path='/layout/two' component={Two}></Route>
                                <Route path='/layout/404' component={NotFound}></Route>
                            </Switch>
                        </Layout>
                    )}></Route>
                    <Route path='/person/:id' component={Person}></Route>
                    <Route path='/404' component={NotFound}></Route>
                    <Route render={() => (
                        <Redirect to='/404'></Redirect>
                    )}>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
