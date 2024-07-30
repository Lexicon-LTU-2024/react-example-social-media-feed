import { ReactElement } from "react";
import { IAuthor } from "../interfaces";
import "../css/PostAuthor.css"

interface IPostAuthorProps {
  author: IAuthor;
}

export function PostAuthor({ author }: IPostAuthorProps): ReactElement {
  return (
    <div className="post-author">
      <span className="user-icon material-symbols-outlined">person</span>
      <div className="user">
        <span className="name">{author.name}</span>
        <span className="username">{author.username}</span>
      </div>
    </div>
  );
}
