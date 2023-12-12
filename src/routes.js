import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import Menu from "./componentes/Menu";

function AppRoutes() {
  return (
    // Primeiro componente configurado para rodar toda aplicação para o React

    <BrowserRouter>
      <Menu />
      {/* Roteador */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        {/* Rota coringa para poder direcionar para um lugar, quando o usuário digitar uma rota nada a ver */}
        <Route path="*" element={<h1>Te liga ai cabeção</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
