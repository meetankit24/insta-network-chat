import React, { useState, useRef } from "react";
import "./postShare.css";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";
import { useSelector, useDispatch } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/UploadAction";

const PostShare = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const iamgeRef = useRef();
  const desc = useRef();
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };
  const postShareSubmitHandler = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
      dispatch(uploadPost(newPost));
      reset();
    }
  };
  const reset = () => {
    setImage(null);
    desc.current.value = "";
  };
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="PostShare">
      <img
        src={
          user?.profilePicture
            ? serverPublic + user?.profilePicture
            : serverPublic + "defaultProfile.png"
        }
        alt=""
      />
      <div>
        <input ref={desc} type="text" placeholder="What's happening" required />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => iamgeRef.current.click()}
          >
            <UilScenery />
            <span>Photos</span>
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            <span>Video</span>
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            <span>Location</span>
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            <span>Schedule</span>
          </div>
          <button className="button ps-button" onClick={postShareSubmitHandler}>
            {loading ? "uploading..." : "Share"}
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={iamgeRef}
              onChange={onImageChange}
              disabled={loading}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
