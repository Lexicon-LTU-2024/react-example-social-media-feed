import { ReactElement } from "react";
import "../css/PostActions.css";

interface IPostActionsProps {
  timestamp: number;
}

export function PostActions({ timestamp }: IPostActionsProps): ReactElement {
  return (
    <div className="post-actions">
      <div className="actions">
        <span className="material-symbols-outlined">favorite</span>
        <span className="material-symbols-outlined">chat_bubble</span>
        <span className="material-symbols-outlined">upload</span>
      </div>
      <p className="timestamp">{new Date(timestamp).toLocaleDateString()}</p>
    </div>
  );
}
