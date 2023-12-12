import { NavLink } from "react-router-dom";
import styles from "./menulink.module.css";

const MenuLink = ({ path, children }) => {
  return (
    <NavLink
      className={styles.link}
      to={path}
      style={({ isActive }) => {
        return {
          textDecoration: isActive ? "underline" : "none",
        };
      }}
    >
      {children}
    </NavLink>
  );
};
export default MenuLink;
