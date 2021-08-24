import { useHistory, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import { GET_POST } from "../../graphql/queries/posts";
import { GET_POSTS } from "../../graphql/queries/posts";
import { DELETE_POST } from "../../graphql/mutations/posts";
import { Button } from "../../common/styles/button.styles";
import "./postDetail.css";

function PostDetail() {
  const { _id } = useParams();
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_POST, { variables: { _id }, fetchPolicy: "cache-and-network" });
  const [deletePost, { loading: deleteLoading }] = useMutation(DELETE_POST, { onCompleted: deletePostCompleted });

  function handleDelete() {
    if (window.confirm("이 항목을 삭제하시겠습니까?")) {
      deletePost({
        variables: { _id },
        update: (store, { data }) => {
          try {
            const postData = store.readQuery({
              query: GET_POSTS,
            });
            store.writeQuery({
              query: GET_POSTS,
              data: {
                getPosts: postData.getPosts.filter((post) => post._id !== data.deletePost._id),
              },
            });
          } catch (error) {
            return null;
          }
          const identify = store.identify(data.deletePost);
          store.evict({ id: identify });
          store.evict({ id: "ROOT_QUERY", fieldName: "getPost", args: { _id: data.deletePost._id } });
        },
      });
    }
  }

  function deletePostCompleted() {
    history.push("/posts");
  }

  return (
    <div className="content">
      <div className="post-details">
        {loading ? (
          <h2>loading...</h2>
        ) : error ? (
          <h2>
            {error.name} : {error.message}
          </h2>
        ) : (
          <article>
            <h2>title : {data?.getPost.title}</h2>
            <div>body : {data?.getPost.body}</div>
            <div>author : {data?.getPost.author}</div>
            <div>_id : {data?.getPost._id}</div>
            <Button onClick={handleDelete}>{deleteLoading ? "loading..." : "Delete"}</Button>
          </article>
        )}
      </div>
    </div>
  );
}

export default PostDetail;
