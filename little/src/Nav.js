import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav aria-label="Main Navigation">
      <ul>
        <li>
          <Link to="/" aria-label="On Click">Home</Link>
        </li>

        <li>
          <Link to="/about" aria-label="On Click">About</Link>
        </li>

        <li>
          <Link to="/menu" aria-label="On Click">Menu</Link>
        </li>

        <li>
          <Link to="/booking" aria-label="On Click">Reservations</Link>
        </li>

        <li>
          <Link to="/order-online" aria-label="On Click">Order Online</Link>
        </li>

        <li>
          <Link to="/login" aria-label="On Click">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
