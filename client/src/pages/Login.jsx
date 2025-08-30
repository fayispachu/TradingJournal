import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
function Login() {
  const navigate = useNavigate();
  const {
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
  } = useContext(UserContext);

  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = () => {
    if (isLogin) loginUser(() => navigate("/"));
    else registerUser(() => navigate("/"));
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-neutral-900">
      <div className="flex flex-col gap-3 items-center p-5 justify-center w-[90%] max-w-md rounded-2xl bg-neutral-950">
        <h1 className="text-gray-400 font-bold text-2xl mb-5">
          {isLogin ? "Login" : "Register"}
        </h1>

        {!isLogin && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-[90%] p-3 rounded-md bg-neutral-900 text-white"
          />
        )}

        <input
          type="email"
          value={isLogin ? loginEmail : email}
          onChange={(e) =>
            isLogin ? setLoginEmail(e.target.value) : setEmail(e.target.value)
          }
          placeholder="Email"
          className="w-[90%] p-3 rounded-md bg-neutral-900 text-white"
        />

        <input
          type="password"
          value={isLogin ? loginPassword : password}
          onChange={(e) =>
            isLogin
              ? setLoginPassword(e.target.value)
              : setPassword(e.target.value)
          }
          placeholder="Password"
          className="w-[90%] p-3 rounded-md bg-neutral-900 text-white"
        />

        <button
          onClick={handleSubmit}
          className="w-[50%] mt-3 p-2 rounded-md bg-neutral-400"
        >
          {isLogin ? "Login" : "Register"}
        </button>

        <p
          className="text-gray-400 text-sm hover:underline cursor-pointer mt-2"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

export default Login;
