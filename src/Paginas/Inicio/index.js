import styles from "./inicio.module.css";
import posts from "json/db.json";
import Post from "componentes/PostCard";
const Inicio = () => {
  return (
    <main>
      <ul className={styles.posts}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Post post={post} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Inicio;
