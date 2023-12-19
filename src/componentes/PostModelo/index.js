import styles from "./PostModule.module.css";

const PostModelo = ({ fotoCapa, titulo, children }) => {
  return (
    <article className={styles.postModeloContainer}>
      <div
        className={styles.fotoCapa}
        style={{ backgroundImage: `url(${fotoCapa})` }}
      />
      <h2 className={styles.título}>{titulo}</h2>
      <div className={styles.postContainer}>{children}</div>
    </article>
  );
};

export default PostModelo;
