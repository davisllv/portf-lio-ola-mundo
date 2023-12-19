import styles from "./post.module.css";

const Post = () => {
  return (
    <div className={styles.post}>
      <img className={styles.capa} src={`/assets/posts/${post.id}/capa.png`} />
    </div>
  );
};

export default Post;
