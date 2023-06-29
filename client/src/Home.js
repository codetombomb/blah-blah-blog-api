import "./Home.css";
import { useState, useEffect, useContext } from "react";
import PreviewCardWrapper from "./wrappers/PreviewCardWrapper";
import { CurrentUserContext } from "./context/currentUserContext";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const {currentUser} = useContext(CurrentUserContext)
  console.log(currentUser)

  useEffect(() => {
      fetch("/blogs")
      .then(resp => resp.json())
      .then(data => setBlogs(data))
  }, []);

  return <PreviewCardWrapper blogs={blogs} />;
}

export default Home;
