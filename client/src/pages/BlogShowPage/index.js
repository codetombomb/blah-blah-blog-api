import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogShowPage() {
  const [currentBlog, setCurrentBlog] = useState({
    title: "",
    user: {first_name: "", last_name: ""},
    content: "",
    num_likes: "",
    read_time: ""
  });
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  
  useEffect(() => {
      setLoading(true);
      async function fetchBlog() {
      const resp = await fetch(`/blogs/${id}`);
      const blog = await resp.json();
      setCurrentBlog(blog);
    }
    fetchBlog();
    setLoading(false);
    return () => {};
  }, [id]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{currentBlog.title}</h1>
          <h3>
            By {currentBlog.user.first_name} {currentBlog.user.last_name}
          </h3>
          <p>{currentBlog.content}</p>
          <hr />
          <p>{currentBlog.num_likes} likes</p>
          <p>Read time: {currentBlog.read_time} mins</p>
        </div>
      )}
    </>
  );
}
export default BlogShowPage;
