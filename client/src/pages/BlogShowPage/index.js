import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogShowPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [currentBlog, setCurrentBlog] = useState({
    title: "",
    user: { first_name: "", last_name: "" },
    content: "",
    num_likes: "",
    read_time: "",
  });

  useEffect(() => {
    setIsLoading(true)
    fetch(`/blogs/${id}`)
        .then(resp => resp.json())
        .then(blog => {
            setCurrentBlog({...blog})
            setIsLoading(false);
        })
    
    // async function fetchBlog() {
    //     const resp = await fetch(`/blogs/${id}`);
    //     const blog = await resp.json();
    //     setCurrentBlog(blog);
    // }
    // fetchBlog();
    // setIsLoading(false);
    // return () => {};
}, [id]);

  return (
    <>
      {isLoading ? (
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
