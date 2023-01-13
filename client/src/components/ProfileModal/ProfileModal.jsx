import { Modal, useMantineTheme } from "@mantine/core";
import "../../pages/Auth/Auth.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../actions/UploadAction";
import { updateUser } from "../../actions/UserAction";

function ProfileModal({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme();
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);

  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      e.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let UserData = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(updateUser(params.id, UserData));
    setModalOpened(false);
  };
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
            onChange={inputHandler}
            value={formData.firstname}
          />
          <input
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
            onChange={inputHandler}
            value={formData.lastname}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAt"
            placeholder="Works at"
            onChange={inputHandler}
            value={formData.worksAt}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="livesin"
            placeholder="Lives in"
            onChange={inputHandler}
            value={formData.livesin}
          />
          <input
            type="text"
            className="infoInput"
            name="country"
            placeholder="Country"
            onChange={inputHandler}
            value={formData.country}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="relationship"
            placeholder="Relationship status"
            onChange={inputHandler}
            value={formData.relationship}
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImage" onChange={onImageChange} />
          Cover Image
          <input type="file" name="coverImage" onChange={onImageChange} />
        </div>
        <button className="button infoButton" onClick={submitHandler}>
          Update
        </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
