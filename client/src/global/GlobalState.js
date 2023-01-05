import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [currentUser, setCurrentUser] = useState([]);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios
      .get("/api/users/currentuser")
      .then((response) => setCurrentUser(response.data))
      .catch((err) => {
        setErrors(err.response.data.errors[0]);
      });
  }, []);

  const data = {
    currentUser,
    errors,
    email,
    password,
    setEmail,
    setPassword,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
