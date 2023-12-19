import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

const SobreMim = () => {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Davi da Silva!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Antônio Evaldo sorrindo"
        className={styles.fotoSobreMim}
      />
    </PostModelo>
  );
};

export default SobreMim;
