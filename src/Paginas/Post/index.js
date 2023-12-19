import { useParams } from "react-router-dom";
import Posts from "json/db.json";
import PostModelo from "componentes/PostModelo";
const Post = () => {
  const { id } = useParams();
  console.log(Posts);

  const Post = Posts.find((post) => post.id === Number(id));

  console.log(Post);
  return (
    <PostModelo
      fotoCapa={`/assets/posts/${Post.id}/capa.png`}
      titulo={Post.titulo}
    >
      {Post.texto}
    </PostModelo>
  );
};

export default Post;
