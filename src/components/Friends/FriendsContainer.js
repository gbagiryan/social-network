import React from 'react';
import {connect} from "react-redux";
import {Friends} from "./Friends";

class FriendsContainer extends React.Component {
    render() {
        return (
            <Friends/>
        );
    };
}

function mapStateToProps(state) {
    return ({});
}

const actionCreators = {}

export default connect(mapStateToProps, actionCreators)(FriendsContainer);