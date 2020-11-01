import React from 'react';
import {connect} from "react-redux";
import {Info} from "./Info";

class InfoContainer extends React.Component {
    render() {
        return (
            <Info/>
        );
    };
}

function mapStateToProps(state) {
    return {};
}

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(InfoContainer);