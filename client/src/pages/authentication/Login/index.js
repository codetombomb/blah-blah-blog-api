import { useState } from "react";
import styles from "./styles.module.css";
// import { CurrentUserContext } from "../../../context/currentUserContext";
import { useNavigate } from "react-router";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  //   const {setCurrentUser, errors, setErrors} = useContext(CurrentUserContext);

  const navigate = useNavigate();

  function handleLoginSubmit(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(loginData),
    };

    fetch("/login", config).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          // setCurrentUser({ ...user })
          navigate("/");
        });
      } else {
        resp.json().then((err) => {
          // setErrors([...err])
        });
      }
    });
    setLoginData({
      email: "",
      password: "",
    });
  }

  function handleInputChange(e) {
    const userDataCopy = { ...loginData };
    userDataCopy[e.target.name] = e.target.value;
    setLoginData(userDataCopy);
  }

  return (
    <form onSubmit={handleLoginSubmit} className={styles.loginForm}>
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={loginData.email}
        />
      </label>
      <input
        type="password"
        name="password"
        onChange={handleInputChange}
        value={loginData.password}
      />
      <input type="submit" />
      {/* {errors.map((err) => (
        <div style={{ color: "red" }}>{err}</div>
      ))} */}
    </form>
  );
}
export default Login;
