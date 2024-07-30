import { ReactElement } from "react";
import { links, Navbar } from ".";
import "../css/Header.css";

export function Header(): ReactElement {
  return (
    <header className="header container">
      <h1 className="logo-name">Social Feed</h1>
      <Navbar links={links} />
    </header>
  );
}
