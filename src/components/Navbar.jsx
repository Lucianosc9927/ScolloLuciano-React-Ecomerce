import { CartWidget } from "./CartWidget";

export const Navbar = () => {

  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li className="navbar__link">
          <a href="#">Favoritos</a>
        </li>
        <li className="navbar__link">
          <a href="#">Ingresar</a>
        </li>
        <li className="navbar__link">
          <a href="#"><CartWidget /></a>
        </li>
      </ul>
    </nav>
  );
};