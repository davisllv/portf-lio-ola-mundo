import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";

const { pathname } = window.location;

const initialRender = pathname === "/" ? <Inicio /> : <SobreMim />;

function App() {
  return initialRender;
}

export default App;
