import styles from "./inicio.module.css";
import posts from "json/db.json";
import Post from "componentes/Post";
const Inicio = () => {
  console.log(posts);
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
