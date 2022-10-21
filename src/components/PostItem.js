import { useState } from "react"

const PostItem = ({post}) => {
    const [singlePost, setSinglePost] =useState("")
    const handleClick = (e)=>{
        setSinglePost = e.target.id
        console.log(e.target.id)
    }
    return(
        <div className="listItem">
            <h1 onClick={handleClick}>{post.title}</h1>
            <p>{post.id}</p>
        </div>
    )
}

export default PostItem

