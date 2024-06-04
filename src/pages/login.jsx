import { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";

function Login() {
  const navigateTolink = (path) => {
    return <Navigate to={path} />;
  };

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const hendlesubmit = (e) => {
    e.preventDefault();
    let username = e.target[0].value;
    let email = e.target[1].value;
    let password = e.target[2].value;

    setUser({
      username: username,
      email: email,
      password: password,
    });
    localStorage.setItem("creatUser", "true");
    navigateTolink("/");
  };

  const store = localStorage.getItem("creatUser");

  return (
    <>
      <form
        onSubmit={(e) => hendlesubmit(e)}
        className="flex w-[400px] bg-black-200 flex-col justify-center items-center rounded-[14px] h-[450px] gap-[14px] m-auto"
      >
        <h1 className="font-bold">LogIn</h1>
        <input
          className="w-[300px] pl-[20px] h-[40px] border-[1px] rounded-[4px] border-black"
          type="text"
          required
          placeholder="Username"
        />
        <input
          className="w-[300px] pl-[20px] h-[40px] border-[1px] rounded-[4px] border-black"
          type="email"
          required
          placeholder="Email"
        />
        <input
          className="w-[300px] pl-[20px] h-[40px] border-[1px] rounded-[4px] border-black"
          type="password"
          required
          placeholder="Password"
        />
        <NavLink className="text-[20px]" to={"/signup"}>
          sigIn
        </NavLink>
        <button className="mt-[20px] w-[200px]" type="submit">
          Login
        </button>
      </form>
      {store === "true" ? <Navigate to={"/"} /> : null}
    </>
  );
}

export default Login;
