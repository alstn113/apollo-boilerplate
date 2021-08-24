import { Link } from "react-router-dom";

import "./postsGridItem.css";

function PostsGridItem({ post }) {
  return (
    <div className="post-list-item">
      <Link to={`posts/${post._id}`}>
        <h2>Title : {post.title}</h2>
        <p>Written by {post.author}</p>
      </Link>
    </div>
  );
}

export default PostsGridItem;
