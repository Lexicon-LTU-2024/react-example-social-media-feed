import { ReactElement } from "react";

export function Search (): ReactElement {
  return <form className="search">
    <input className="input" placeholder="Search post" type="text" />
  </form>
}