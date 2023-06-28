import { useNavigate } from "react-router-dom"

function PreviewCard({blog}) {
    const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/blogs/${blog.id}`)}>{blog.title}</div>
  )
}
export default PreviewCard