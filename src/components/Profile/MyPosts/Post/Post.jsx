import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
  return (
      <div className={s.item}>
        <img srcSet="https://i.ytimg.com/vi/E8Bilsz7x5s/hqdefault.jpg" alt=""/>
        {props.message}
        <div>
          <span>like</span> {props.likeCounts}
        </div>
      </div>

  )
}

export default Post;