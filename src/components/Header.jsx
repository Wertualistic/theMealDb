import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <li className="brand-logo">
          <Link to='/'>React</Link>
        </li>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <Link to='/categories'>Categories</Link>
        </ul>
      </div>
    </nav>
  );
}

export { Header };