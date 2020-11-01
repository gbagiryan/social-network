import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import * as axios from 'axios';
import {changePage, setFollow, setLoading, setTotalUsersCount, setUsers} from "../../redux/Reducers/UsersReducer";
import Loading from "../Common/Loading/Loading";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`)
            .then(res => {
                this.props.setUsers([...res.data.items]);
                this.props.setTotalUsersCount(res.data.totalCount);
                this.props.setLoading(false);
            });

    };

    changePage = (pageNum) => {
        this.props.setLoading(true);
        this.props.changePage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`)
            .then(res => {
                this.props.setUsers([...res.data.items]);
                this.props.setTotalUsersCount(res.data.totalCount);
                this.props.setLoading(false);
            });
    };

    render() {
        return (
            <div>
                <div>{this.props.isLoading ? <Loading/> : null}</div>
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    usersPerPage={this.props.usersPerPage}
                    currentPage={this.props.currentPage}
                    changePage={this.changePage}
                    setFollow={this.props.setFollow}
                />
            </div>
        );
    };
}

function mapStateToProps(state) {
    return ({
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        usersPerPage: state.usersPage.usersPerPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isLoading: state.usersPage.isLoading
    });
}

const actionCreators = {
    setUsers,
    setTotalUsersCount,
    changePage,
    setLoading,
    setFollow
}

export default connect(mapStateToProps, actionCreators)(UsersContainer);