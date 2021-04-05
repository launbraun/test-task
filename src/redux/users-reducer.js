import {userAPI} from "../api/api";

const SET_USERS = 'SET_USERS'
const CLEAN_STATE = 'CLEAN_STATE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    isFetching: false
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case CLEAN_STATE:
            return {
                ...state,
                users: []
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const cleanState = () => ({type: CLEAN_STATE})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


export const getUsers = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))

        const getRandomInt = () => {
            return Math.floor(Math.random() * 2 + 1);
        }
        const page = getRandomInt()
        const data = await userAPI.getUsers(page)
        dispatch(setUsers(data))
        dispatch(toggleIsFetching(false))
    }
}

export const emptyState = () => (dispatch) => {
    dispatch(cleanState())
}

export default usersReducer
