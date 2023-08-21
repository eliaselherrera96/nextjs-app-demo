import React, { Suspense } from 'react'
import PostDetails from '@/app/components/postDetails';

const PostDetailsPage = async ({params}) => {
    const postId = params.postId
    const loadingJSX = (<div><h1>wait...</h1></div>)
  return (
    <div style={{padding: "20px"}}>
        <h1>Post Details</h1>
        <Suspense fallback={loadingJSX}>
        <PostDetails postId={postId}/>
        </Suspense>
    </div>
  )
}

export default PostDetailsPage