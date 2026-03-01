import { use } from "react";
import Post from "./post";

export default function Posts ({postPromise}) {

    const posts = use(postPromise);
    console.log(posts)

    return(
        <div style={{
            border: '2px solid blue',
            borderRadius: '20px',
            marginBottom: '10px',
            padding: '20px'
        }}>
           <h3>Posts: {posts.length}</h3>
           {
               posts.map(post => <Post key={post.id} post={post}></Post>)
           }
        </div>
    )
}