
import * as UserAPI from "../api/UserRequest";

export const updateUser = (id, formData) => async (dispatch) => {
    dispatch({ type: "UPDATING_START" })
    try {
        const { data } = await UserAPI.updateUser(id, formData);
        dispatch({ type: "UPDATING_SUCCESS", data: data })

    } catch (error) {
        console.log(error);
        dispatch({ type: "UPDATING_FAIL" })

    }
}


export const followUser = (id, followData) => async (dispatch) => {
    dispatch({ type: "FOLLOW_USER" })
    try {
        await UserAPI.followUser(id, followData);
    } catch (error) {
        console.log(error);

    }
}

export const unFollowUser = (id, followData) => async (dispatch) => {
    dispatch({ type: "UNFOLLOW_USER" })
    try {
        await UserAPI.unFollowUser(id, followData);
    } catch (error) {
        console.log(error);

    }
}
