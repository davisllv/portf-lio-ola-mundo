import styles from "./botaoPrincipal.module.css"

const BotaoPrincipal = ({ size, children }) => {
    return (
        <button className={`${styles.botaoPrincipal} ${styles[size]}`}>{children}</button>
    )
}

export default BotaoPrincipal;