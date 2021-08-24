import PostsGridItem from "./postsGridItem/postsGridItem";

import "./postsGrid.css";

function PostsGrid({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id} className="post-preview">
          <PostsGridItem post={post} />
        </div>
      ))}
    </div>
  );
}

export default PostsGrid;
