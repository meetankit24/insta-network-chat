import React, { useEffect } from "react";
import "./posts.css";
import PostCard from "../PostCard/PostCard";
import { useSelector, useDispatch } from "react-redux";
import { getTimelinePosts } from "../../actions/PostAction";
import { useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  if (!posts) return "No Posts";
  if (params.id) posts = posts.filter((post) => post.userId === params.id);

  return (
    <div className="Posts">
      {loading
        ? "Fetching Posting..."
        : posts.map((post, id) => {
            return <PostCard data={post} key={id} />;
          })}
    </div>
  );
};

export default Posts;
