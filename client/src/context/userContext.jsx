import React, { useState, createContext } from "react";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();
  const registerUser = async () => {
    try {
      const { data } = await axiosInstance.post("/user/create", {
        name,
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setName("");
      setEmail("");
      setPassword("");
      toast.success("Registration successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.error || err.message);
    }
  };

  const loginUser = async () => {
    try {
      const { data } = await axiosInstance.post("/user/login", {
        email: loginEmail,
        password: loginPassword,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setLoginEmail("");
      setLoginPassword("");
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.error || err.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        registerUser,
        loginEmail,
        setLoginEmail,
        loginPassword,
        setLoginPassword,
        loginUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
