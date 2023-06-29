import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Tag from "../../components/Tag";

function BlogShowPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [currentBlog, setCurrentBlog] = useState({
    user: { first_name: "", last_name: "" },
    tags: [],
    title: "",
    content: "",
    num_likes: "",
    read_time: "",
  });

  useEffect(() => {
    setIsLoading(true);
    fetch(`/blogs/${id}`)
      .then((resp) => resp.json())
      .then((blog) => {
        setCurrentBlog({ ...blog });
        setIsLoading(false);
      });
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
          {currentBlog.tags.map(({name}) => <Tag key={uuidv4()} name={name} />)}
        </div>
      )}
    </>
  );
}
export default BlogShowPage;
