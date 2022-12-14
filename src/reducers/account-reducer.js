import * as types from '../actions/account-action-types'

const initialProfile = {user: []}

function usersReducer(userState=initialProfile, action) {
    switch(action.type) {
        case types.GET_ACCOUNT: {
            return {
                ...userState, user: action.payload
            }
        }
    default:
        return userState;
    }
}
export default usersReducer;