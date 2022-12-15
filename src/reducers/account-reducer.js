import * as types from '../actions/account-action-types'

const initialProfile = {loginInfo: {}, user: {}, error: {}}

function usersReducer(userState=initialProfile, action) {
    switch(action.type) {
        case types.GET_ACCOUNT: {
            return {
                ...userState, user: action.payload
            }
        }
        case types.LOGIN: {
            return {
                ...userState, loginInfo: action.payload
            }
        }
        case types.ERROR: {
            return {
                ...userState, error: action.payload.response.data
            }
        }
    default:
        return userState;
    }
}
export default usersReducer;