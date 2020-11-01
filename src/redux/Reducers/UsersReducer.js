const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const CHANGE_PAGE = 'CHANGE_PAGE';
const SET_LOADING = 'SET_LOADING';
const SET_FOLLOW = 'SET_FOLLOW';

const initialState = {
    users: [],
    currentPage: 1,
    usersPerPage: 10,
    totalUsersCount: 0,
    isLoading: false
}

export const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.pageNum
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user
                })
            }
        default:
            return state
    }
};

export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const changePage = (pageNum) => ({type: CHANGE_PAGE, pageNum})
export const setLoading = (isLoading) => ({type: SET_LOADING, isLoading})
export const setFollow = (userId) => ({type: SET_FOLLOW, userId})