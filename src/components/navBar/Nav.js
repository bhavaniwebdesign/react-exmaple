import { Link } from "react-router-dom";
import styles from "./nav.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Nav = () => {
  return (
    <>
      <nav className={cx({ nav: true })}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/form">Forms-Example</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
