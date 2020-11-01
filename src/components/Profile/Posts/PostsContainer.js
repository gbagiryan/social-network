import React from 'react';
import {connect} from "react-redux";
import {Posts} from "./Posts";
import {addPost, writePost} from "../../../redux/Reducers/ProfileReducer";

class PostsContainer extends React.Component {
    render() {
        return (
            <Posts posts={this.props.posts}
                   newPostContent={this.props.newPostContent}
                   writePost={this.props.writePost}
                   addPost={this.props.addPost}/>
        );
    };
}

function mapStateToProps(state) {
    return {
        posts: state.profilePage.posts,
        newPostContent: state.profilePage.newPostContent
    }
}

const actionCreators = {
    writePost,
    addPost
};

export default connect(mapStateToProps, actionCreators)(PostsContainer);