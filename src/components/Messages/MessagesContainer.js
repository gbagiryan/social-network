import React from 'react';
import {connect} from "react-redux";
import {Messages} from "./Messages";
import {sendMessage, writeMessage} from "../../redux/Reducers/MessagesReducer";

class MessagesContainer extends React.Component {
    render() {
        return (
            <Messages
                messages={this.props.messages}
                newMessageContent={this.props.newMessageContent}
                dialogs={this.props.dialogs}
                writeMessage={this.props.writeMessage}
                sendMessage={this.props.sendMessage}
            />
        );
    };
}

function mapStateToProps(state) {
    return {
        messages: state.messagesPage.messages,
        newMessageContent: state.messagesPage.newMessageContent,
        dialogs: state.messagesPage.dialogs
    };
}

const actionCreators = {
    writeMessage,
    sendMessage
};

export default connect(mapStateToProps, actionCreators)(MessagesContainer);