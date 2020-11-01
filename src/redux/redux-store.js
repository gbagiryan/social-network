import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./Reducers/ProfileReducer";
import {MessagesReducer} from "./Reducers/MessagesReducer";
import {FriendsReducer} from "./Reducers/FriendsReducer";
import {UsersReducer} from "./Reducers/UsersReducer";


let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    usersPage: UsersReducer,
    friendsPage: FriendsReducer
});

let store = createStore(reducers);

export default store;