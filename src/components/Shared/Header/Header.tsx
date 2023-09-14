import { Logo } from "../Logo/Logo";
import classes from "./class.module.scss";
import { MyNavLink } from "../MyNavLink/MyNavLink";
import { useLocation } from "react-router-dom";
export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <header className={isHomePage ? "header-main" : "header-others"}>
      <div className={["wrapper", classes.Header].join(" ")}>
        <div className="logo">
          <Logo isHomePage={isHomePage} />
        </div>
        <nav className={classes.Nav}>
          <ul className={classes.NavList}>
            <li>
              <MyNavLink to="/">Home</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/discover">Discover</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/services">Services</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/about-us">About Us</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/contacts">Contacts</MyNavLink>
            </li>
          </ul>
        </nav>
        <p>languages</p>
      </div>
    </header>
  );
};
