import PreviewCard from "../../components/PreviewCard"
import { v4 as uuidv4 } from 'uuid';

function PreviewCardWrapper({blogs}) {
    const blogCards = blogs.map(blog => <PreviewCard key={uuidv4()} blog={blog}/>)
  return (
    <div>{blogCards}</div>
  )
}
export default PreviewCardWrapper