const WRITE_MESSAGE = 'WRITE_MESSAGE';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
    messages: [
        {id: 1, content: 'firstMessage'}],
    newMessageContent: '',
    dialogs: [
        {id: 1, name: "Alice"},
        {id: 2, name: "John"},
        {id: 3, name: "Paul"},
        {id: 4, name: "Kurt"}],
}

export const MessagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case WRITE_MESSAGE:
            return {
                ...state,
                newMessageContent: action.newMessageContent
            }
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 0, content: state.newMessageContent}],
                newMessageContent: ''
            }
        default:
            return state
    }
};

export const writeMessage = (newMessageContent) => ({type: WRITE_MESSAGE, newMessageContent});
export const sendMessage = () => ({type: SEND_MESSAGE});