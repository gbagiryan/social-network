import React from 'react';
import {connect} from "react-redux";
import {Profile} from "./Profile";

class ProfileContainer extends React.Component {
    render() {
        return (
            <Profile/>
        );
    };
}

function mapStateToProps(state) {
    return {};
}

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(ProfileContainer);