import { Route, Routes, useParams } from "react-router-dom";
import "./post.css"
import Posts from "json/db.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "Paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";

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
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route index element={
          <PostModelo
          fotoCapa={`/assets/posts/${Post.id}/capa.png`}
          titulo={post.titulo}
        >
          <div className="post-markdown-container">
            <ReactMarkdown>{post.texto}</ReactMarkdown>
          </div>
        </PostModelo>
        } />
      </Route>
    </Routes>
  );
};

export default Post;
