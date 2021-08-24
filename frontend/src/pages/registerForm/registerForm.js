import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";

import { Button } from "../../common/styles/button.styles";
import { REGISTER } from "../../graphql/mutations/user";

import "./registerForm.css";

function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const [registerUser] = useMutation(REGISTER);

  const history = useHistory();

  const onSubmit = ({ username, password, passwordConfirm }) => {
    if (password !== passwordConfirm) {
      alert("패스워드를 다시 확인해주세요");
      return;
    }
    registerUser({ variables: { userInput: { username, password } } });
  };
  return (
    <div className="create">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>EMAIL</label>
        <input type="email" {...register("username")} />
        <label>PASSWORD</label>
        <input type="password" {...register("password")} />
        <label>PASSWORD CONFIRM</label>
        <input type="password" {...register("passwordConfirm")} />
        <Button>REGISTER</Button>
      </form>
    </div>
  );
}

export default RegisterForm;
