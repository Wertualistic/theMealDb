import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <li className="brand-logo">
          <Link to="/">React</Link>
          <Link to="/categories">Categories</Link>
        </li>
      </div>
    </nav>
  );
}

export { Header };
