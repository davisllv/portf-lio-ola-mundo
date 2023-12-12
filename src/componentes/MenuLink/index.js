import { Link, useLocation } from "react-router-dom";
import styles from "./menulink.module.css";

const MenuLink = ({ path, children }) => {
  const { pathname } = useLocation();

  return (
    <Link
      className={`
      ${styles.link} 
      ${pathname === path ? styles.linkdestacado : ""}`}
      to={path}
    >
      {children}
    </Link>
  );
};
export default MenuLink;
