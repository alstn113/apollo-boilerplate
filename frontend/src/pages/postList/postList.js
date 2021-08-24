import PostsGrid from "../../components/posts/postsGrid/postsGrid";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../../graphql/queries/posts";

import "./postList.css";

function PostList() {
  const { data, loading, error } = useQuery(GET_POSTS, { fetchPolicy: "cache-and-network" });
  return (
    <div className="content">
      {loading ? (
        <div>
          <div>lodaing...</div>
        </div>
      ) : error ? (
        <div>
          {error.name} : {error.message}
        </div>
      ) : (
        <PostsGrid posts={data.getPosts || []} />
      )}
    </div>
  );
}

export default PostList;
