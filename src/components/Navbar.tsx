import { ReactElement } from "react";
import { ILink, Link } from ".";
import "../css/Navbar.css";

interface INavbarProps {
  links: ILink[];
}

export function Navbar({ links }: INavbarProps): ReactElement {
  return (
    <nav className="navbar">
      {links.map((link) => (
        <Link key={link.id} link={link} />
      ))}
    </nav>
  );
}
