import { ReactElement } from "react";
import { Post, posts } from ".";
import "../css/Feed.css";

// import { Post } from "./Post";
// import { posts } from "../data";

export function Feed(): ReactElement {
  return (
    <main className="feed">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
        
        // <Post
        //   key={post.id}
        //   author={post.author}
        //   content={post.content}
        //   id={post.id}
        //   image={post.image}
        //   timestamp={post.timestamp}
        // />
      ))}
    </main>
  );
}
