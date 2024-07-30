import { ReactElement } from "react";
import { IPost, PostActions, PostAuthor } from ".";
import "../css/Post.css";

interface IPostProps {
  post: IPost;
}

// export function Post({ author, content, image, timestamp }: IPost): ReactElement {
//   return (
//     <article className="post">
//       <PostAuthor author={author} />
//       <p className="content">{content}</p>
//       <figure className="figure">
//         <img src={image} className="image" />
//       </figure>
//       <PostActions timestamp={timestamp} />
//     </article>
//   );
// }

export function Post({ post }: IPostProps): ReactElement {
  return (
    <article className="post">
      <PostAuthor author={post.author} />
      <p className="content">{post.content}</p>
      <figure className="figure">
        <img src={post.image} className="image" />
      </figure>
      <PostActions timestamp={post.timestamp} />
    </article>
  );
}
