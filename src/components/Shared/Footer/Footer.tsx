import { Logo } from "../Logo/Logo";
import { MyNavLink } from "../MyNavLink/MyNavLink";
import classes from "./classes.module.scss";

export const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className="wrapper">
        <div className={classes.FooterGrid}>
          <div>
            <Logo className={classes.TitleLogo} isHomePage={true} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel
            </p>
          </div>
          <div>
            <h3 className={classes.Title}>Links</h3>
            <ul>
              <li>
                <MyNavLink to="Discover">Discover</MyNavLink>
              </li>
              <li>
                <MyNavLink to="Special Deals">Special Deals</MyNavLink>
              </li>
              <li>
                <MyNavLink to="Services">Services</MyNavLink>
              </li>
              <li>
                <MyNavLink to="Community">Community</MyNavLink>
              </li>
              <li>
                <MyNavLink to="About Us">About Us</MyNavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={classes.Title}>Services</h3>
            <ul>
              <li>
                <MyNavLink to="About Us">About Us</MyNavLink>
              </li>
              <li>
                <MyNavLink to="Blog & Articles">Blog & Articles</MyNavLink>
              </li>
              <li>
                <MyNavLink to="Term and Condition">
                  Term and Condition
                </MyNavLink>
              </li>
              <li>
                <MyNavLink to="Privacy Policy">Privacy Policy</MyNavLink>
              </li>
              <li>
                <MyNavLink to="Contact Us">Contact Us</MyNavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={classes.Title}>Contact</h3>
            <ul>
              <li>
                <p>Address: Jl.Codelaras No.205A</p>
              </li>
              <li>
                <p>Kediri, Pare AG17</p>
              </li>
              <li>
                <p>Phone: 123 456 7890</p>
              </li>
              <li>
                <p>Email: myagungperdana@gmail.com</p>
              </li>
              <li>
                <p>Maps: Kediri, East java</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
