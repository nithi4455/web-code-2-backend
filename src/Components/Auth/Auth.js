import React from "react";
import { useDispatch } from "react-redux";
import { sendUserAuthRequest } from "../../api-helpers/api-helpers";
import { userAction } from "../../store";
import AuthForm from "./AuthForm";

function Auth() {
  const dispatch = useDispatch();
  const onResRecieved = (data)=>{
    console.log(data)
    dispatch(userAction.login)
    localStorage.setItem("userId", data.id )
  }
  const getData = (data) => {
    sendUserAuthRequest(data.inputs, data.signup)
    .then(onResRecieved)
      .catch((err) => console.log(err));
    console.log("admin", data);
  };
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  );
}

export default Auth;
