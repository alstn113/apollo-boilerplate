import { Link } from "react-router-dom";

import "./postsGridItem.css";

function PostsGridItem({ post }) {
  return (
    <div>
      <Link to={`posts/${post._id}`}>
        <br />
        <p>title : {post.title}</p>
        <br />
      </Link>
    </div>
  );
}

export default PostsGridItem;
