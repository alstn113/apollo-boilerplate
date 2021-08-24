import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";

import { Button } from "../../common/styles/button.styles";
import { CREATE_POST } from "../../graphql/mutations/posts";
import { GET_POSTS } from "../../graphql/queries/posts";

import "./createPost.css";

function CreatePost() {
  const { register, handleSubmit } = useForm();
  const [createPost, { loading }] = useMutation(CREATE_POST, { onCompleted: createPostCompleted });
  const history = useHistory();

  function createPostCompleted() {
    history.push("/posts");
  }
  const onSubmit = ({ title, body, author }) => {
    const post = { title, body, author };
    createPost({
      variables: { post },
      update: (store, { data }) => {
        try {
          const postData = store.readQuery({
            query: GET_POSTS,
          });
          store.writeQuery({
            query: GET_POSTS,
            data: {
              getPosts: [...postData.getPosts, data.createPost],
            },
          });
        } catch (error) {
          return null;
        }
      },
    });
  };
  return (
    <div className="create">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Post title:</label>
        <input type="text" {...register("title")} />
        <label>Post body:</label>
        <textarea type="text" {...register("body")} />
        <label>Post author:</label>
        <input type="text" {...register("author")} />
        <Button>{loading ? "loading..." : "create"}</Button>
      </form>
    </div>
  );
}

export default CreatePost;
