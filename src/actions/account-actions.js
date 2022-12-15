import * as types from './account-action-types';
import axios from 'axios';

import URL from '../utils/url';

export function fetchAccount(username) {
    return function(dispatch) {
        axios.get(`${URL}/users/${username}`).then(res => {
            if (res !== null) {
                dispatch({type: types.GET_ACCOUNT, payload: res.data});
            }
            else {
                const onFail=[{message: "User does not exist"}]
                dispatch({type: types.GET_ACCOUNT, payload: onFail})
            }
        }).catch(err => {
            console.log(err);
        })
    }
}

export function login(payload) {
    return function(dispatch) {
        axios.post(`${URL}/users/login`, payload).then(res => {
            console.log(res);
        })
    }
}