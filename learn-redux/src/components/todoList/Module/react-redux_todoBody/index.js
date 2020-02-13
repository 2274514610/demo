import React from 'react'
import {connect} from 'react-redux'

import todoBody from '../todoBody'   //引入这个组件的目地是将其转换为容器组件。

const mapStateToProps = function (state) {
    return {
        arr: state.arr,
        status: state.status
    }
};

const react_redux_Body = connect(
    mapStateToProps
)(todoBody);

export default react_redux_Body;
