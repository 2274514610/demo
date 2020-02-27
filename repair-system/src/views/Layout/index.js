import React from 'react'
import {NavBar,TabBar} from "antd-mobile";
import './index.scss'

const TabBarData = [
    {
        name: 'all',
        title: '所有记录',
        icon: 'icon-jilu',
        url: '/layout'
    },
    {
        name: 'repair',
        title: '已派单',
        icon: 'icon-weixiu',
        url: '/layout/send'
    },
    {
        name: 'complete',
        title: '已完成',
        icon: 'icon-wancheng',
        url: '/layout/complete'
    },
    {
        name: 'me',
        title: '我的',
        icon: 'icon-wode',
        url: '/layout/customercenter'
    }
];
class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '所有维修记录',
            selectedTab: 'all'
        }
    }
    render() {
        return (
            <div className="layout_box">
                <NavBar>{this.state.title}</NavBar>
                {/*类似于vue中的插槽*/}
                {this.props.children}
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    tabBarPosition='bottom'
                >
                    {
                        TabBarData.map((item,index)=> (
                            <TabBar.Item
                                key={index}
                                title={item.title}
                                icon={<i className={'iconfont' + ' ' + item.icon}></i>}
                                selectedIcon={<i className={'iconfont' + ' ' + item.icon + ' ' +'active'}></i>}
                                selected={this.state.selectedTab === item.name}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: item.name,
                                    });
                                    this.props.history.push(item.url)
                                }}
                            />

                        ))
                    }
                </TabBar>
            </div>
        );
    }

    componentWillUpdate(nextProps, nextState) {
        // console.log('nextProps', nextProps)
        // console.log('nextState', nextState)
        let pathName = nextProps.location.pathname;
        let title = '';
        switch (pathName) {
            case '/layout':
                title = '所有维修记录'
                if (nextState.title === '所有维修记录') {
                    return
                }
                break;
            case '/layout/send':
                title = '已派单'
                if (nextState.title === '已派单') {
                    return
                }
                break;
            case '/layout/complete':
                title = '已完成'
                if (nextState.title === '已完成') {
                    return
                }
                break;
            case '/layout/customercenter':
                title = '我的'
                if (nextState.title === '我的'){
                    return
                }
                break;
            default :
                title = '所有维修记录'
        }
        this.setState({
            title,
        })
    }
}

export default Layout