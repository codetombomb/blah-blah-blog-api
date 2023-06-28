import "./Home.css";
import { useState, useEffect } from "react";
import PreviewCardWrapper from "./wrappers/PreviewCardWrapper";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs(){
      const resp = await fetch("/blogs")
      const blogs = await resp.json()
      setBlogs(blogs)
    }
    fetchBlogs()
  }, []);

  return <PreviewCardWrapper blogs={blogs} />;
}

export default Home;
