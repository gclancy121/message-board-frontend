const profile = {
    username: '',
    user_id: -1
}

export function setUsername(username) {
    profile.username = username;
}

export function setUserId(user_id) {
   profile.user_id = user_id;
}

export function fetchUsername() {
    return profile.username;
}

export function fetchUserId() {
    return profile.user_id;
}

export function reset() {
    profile.username = '';
    profile.user_id = -1;
    return profile;
}