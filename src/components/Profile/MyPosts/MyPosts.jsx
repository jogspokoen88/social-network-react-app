import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import AddNewPostForm from "../AddPostForm/AddPostForm";

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

  let NewPostElement = React.createRef()

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
      <div className={s.postsBlock}>
        <h3>MyPosts</h3>
        <AddNewPostForm onSubmit={onAddPost}/>

        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
  )
}


export default MyPosts;