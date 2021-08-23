import { useParams } from "react-router-dom";
import { GET_POST } from "../../graphql/queries/posts";
import { useQuery } from "@apollo/client";

import "./postDetail.css";

function PostDetail() {
  const { _id } = useParams();
  const { loading, error, data } = useQuery(GET_POST, { variables: { _id } });

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>
          {error.name} : {error.message}
        </div>
      ) : (
        <div>
          <div>_id : {data?.getPost._id}</div>
          <div>title : {data?.getPost.title}</div>
          <div>body : {data?.getPost.body}</div>
          <div>author : {data?.getPost.author}</div>
        </div>
      )}
    </div>
  );
}

export default PostDetail;
