export const SET_ACTIVE_USER_ID = ' SET_ACTIVE_USER_ID';

export const setActiveUserId = id => {
    return {
        type: SET_ACTIVE_USER_ID,
        activeUserId: id
    }
}