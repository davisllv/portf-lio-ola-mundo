import styles from "./menu.module.css";
import MenuLink from "../MenuLink";
const Menu = () => {
  return (
    <header>
      <nav className={styles.navegacao}>
        {/* a -> ele recarrega toda a página */}
        <MenuLink path="/">Início</MenuLink>
        <MenuLink path="/sobremim">Sobre mim</MenuLink>
      </nav>
    </header>
  );
};

export default Menu;
