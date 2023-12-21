import { useParams } from "react-router-dom";
import "./post.css"
import Posts from "json/db.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "Paginas/NaoEncontrada";

const Post = () => {
  const { id } = useParams();
  console.log(Posts);

  const post = Posts.find((post) => post.id === Number(id));


  if(!post){
    return (
      <NaoEncontrada />
    )
  }
  return (
    <PostModelo
      fotoCapa={`/assets/posts/${Post.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </PostModelo>
  );
};

export default Post;
