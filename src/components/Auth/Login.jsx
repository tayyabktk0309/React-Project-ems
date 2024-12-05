import React, { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const loginFormSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border border-emerald-600 py-32 px-10 rounded-xl shadow-inner shadow-emerald-300">
        <form
          action=""
          className="flex flex-col items-center justify-center gap-5"
          onSubmit={(e) => loginFormSubmit(e)}
        >
          <input
            className="text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400"
            type="email"
            placeholder="Enter Email"
            required
            value={userData.email}
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                email: e.target.value,
              }))
            }
          />
          <input
            className="text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400"
            type="password"
            placeholder="Enter Password"
            required
            value={userData.password}
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                password: e.target.value,
              }))
            }
          />
          <button
            type="submit"
            className="text-white outline-none bg-emerald-600  rounded-full py-3 px-5 text-xl placeholder:text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
