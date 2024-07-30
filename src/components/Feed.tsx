import { ReactElement } from "react";
import { Post, posts } from ".";
import "../css/Feed.css";

export function Feed(): ReactElement {
  return (
    <main className="feed">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </main>
  );
}
