import "./Home.css";
import { useState, useEffect } from "react";
import PreviewCardWrapper from "./wrappers/PreviewCardWrapper";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
      fetch("/blogs")
      .then(resp => resp.json())
      .then(data => setBlogs(data))
  }, []);

  return <PreviewCardWrapper blogs={blogs} />;
}

export default Home;
