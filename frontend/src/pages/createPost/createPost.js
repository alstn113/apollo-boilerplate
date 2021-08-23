import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
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
    <div className="posts-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" {...register("title")} />
        </div>
        <div>
          <input type="text" {...register("body")} />
        </div>
        <div>
          <input type="text" {...register("author")} />
        </div>
        <div>
          <button type="submit">{loading ? "loading..." : "create"}</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
