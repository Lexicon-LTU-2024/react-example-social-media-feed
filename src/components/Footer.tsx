import { ReactElement } from "react";
import { links, Navbar } from ".";
import "../css/Footer.css";

export function Footer(): ReactElement {
  return (
    <footer className="footer">
      <Navbar links={links} />
      <p className="rights">
        <span className="material-symbols-outlined">copyright</span>
        2024 Social Media. All rights reserved
      </p>
    </footer>
  );
}
