import { createContext, useEffect, useState } from "react";

const CurrentUserContext = createContext();

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setCurrentUser({ ...user }));
      } else {
        resp.json().then((err) => setErrors([...err]));
      }
    });
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, setCurrentUser, errors, setErrors }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}

export { CurrentUserProvider, CurrentUserContext };
