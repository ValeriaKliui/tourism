import { NavLink } from "react-router-dom";

type MyNavLinkState = {
  to: string;
  children: string;
};

export const MyNavLink: React.FC<MyNavLinkState> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      {children}
    </NavLink>
  );
};
