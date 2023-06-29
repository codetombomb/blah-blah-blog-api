import { useState } from "react";
import styles from "./styles.module.css"

function Signup() {
  const [userData, setUserData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  });

  function handleSignupSubmit(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userData),
    };
    fetch("/users", config)
      .then((resp) => resp.json())
      .then(console.log);
      setUserData({
        email: "",
        first_name: "",
        last_name: "",
        avatar: "",
      })
  }

  function handleInputChange(e) {
    const userDataCopy = {...userData}
    userDataCopy[e.target.name] = e.target.value
    setUserData(userDataCopy)
  }

  return (
    <form onSubmit={handleSignupSubmit} className={styles.signupForm}>
      <input
        type="email"
        name="email"
        onChange={handleInputChange}
        value={userData.email}
      />
      <input
        type="text"
        name="first_name"
        onChange={handleInputChange}
        value={userData.first_name}
      />
      <input
        type="text"
        name="last_name"
        onChange={handleInputChange}
        value={userData.last_name}
      />
      <input
        type="file"
        name="avatar"
        onChange={handleInputChange}
        value={userData.avatar}
      />
      <input type="submit" />
    </form>
  );
}
export default Signup;
