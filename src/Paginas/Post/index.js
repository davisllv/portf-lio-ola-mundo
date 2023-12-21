import { useParams } from "react-router-dom";
import "./post.css"
import Posts from "json/db.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";

const Post = () => {
  const { id } = useParams();
  console.log(Posts);

  const Post = Posts.find((post) => post.id === Number(id));

  return (
    <PostModelo
      fotoCapa={`/assets/posts/${Post.id}/capa.png`}
      titulo={Post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>{Post.texto}</ReactMarkdown>
      </div>
    </PostModelo>
  );
};

export default Post;
