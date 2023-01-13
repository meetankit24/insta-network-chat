import * as UploadApi from "../api/UploadRequest";

export const uploadImage = (uploadData) => async (dispatch) => {
    try {
        await UploadApi.uploadImage(uploadData);
    } catch (error) {
        console.log(error);

    }
}

export const uploadPost = (data) => async (dispatch) => {
    dispatch({ type: "UPLOAD_START" })
    try {
        const newData = await UploadApi.uploadPost(data);
        console.log(newData, "<>>>>>>>>>>>>>>>>>newDatanewData>>>>>>>>>>>>>>>>");
        dispatch({ type: "UPLOAD_SUCCESS", data: newData.data })

    } catch (error) {
        console.log(error);
        dispatch({ type: "UPLOAD_FAIL" })

    }
}