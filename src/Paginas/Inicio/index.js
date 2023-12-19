import Banner from "componentes/Banner";
import styles from "./inicio.module.css";
import posts from "json/db.json";
const Inicio = () => {
  console.log(posts);
  return (
    <main>
      <Banner />

      <h1>Olá Mundo</h1>
      <ul className={styles.posts}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <ul>{post.titulo}</ul>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Inicio;
