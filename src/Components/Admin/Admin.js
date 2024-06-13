import React from "react";
import { useDispatch } from "react-redux";
import { sendAdminAuthRequest } from "../../api-helpers/api-helpers";
import { adminAction } from "../../store";
import AuthForm from "../Auth/AuthForm";

function Admin() {
  const dispatch = useDispatch()
  const onResRecieved = (data) =>{
    console.log(data);
    dispatch(adminAction.login)
    localStorage.setItem("adminId", data.id);
    localStorage.setItem("token", data.token);
  }
  const getData = (data) => {
    console.log("Admin", data);
    sendAdminAuthRequest(data.inputs)
      .then(onResRecieved)
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true} />
    </div>
  );
}

export default Admin;
