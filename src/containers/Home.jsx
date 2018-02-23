import React, {Component} from 'react'
import {connect} from 'react-redux'


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                React世界欢迎您
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        // example: state.example.toJS()
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // actions: bindActionCreators(Actions, dispatch)
    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(Home)
