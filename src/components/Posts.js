import PostItem from './PostItem'
import { useState } from 'react'

const Posts = ({posts}) => {
    const [singlePost, setSinglePost] =useState("")
const handleClick = (e) =>{
 setSinglePost(e.target.value)
 console.log(e.target.value)

} 

    return posts.map((post) => (
        <PostItem post={post} onClick ={handleClick}/>
    ))
}

export default Posts