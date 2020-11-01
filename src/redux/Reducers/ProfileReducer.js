const WRITE_POST = 'WRITE_POST';
const ADD_POST = 'ADD_POST';

const initialState = {
    posts: [
        {id: 0, content: 'hello there!'},
        {id: 1, content: 'hello there!'},
        {id: 2, content: 'hello there!'},],
    newPostContent: ''
};

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case WRITE_POST:
            return ({
                ...state,
                newPostContent: action.newPostContent
            });
        case ADD_POST:
            return ({
                ...state,
                posts: [...state.posts, {id: 0, content: state.newPostContent}],
                newPostContent: ''
            });

        default:
            return state
    }
};

export const writePost = (newPostContent) => ({type: WRITE_POST, newPostContent});
export const addPost = () => ({type: ADD_POST});
