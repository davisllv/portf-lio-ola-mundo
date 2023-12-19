/* eslint-disable jsx-a11y/alt-text */
import styles from "./banner.module.css";
import circuloColorido from "../../assets/circulo_colorido.png";
import minhaFoto from "../../assets/minha_foto.png";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>

        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Davi da Silva dos Santos,
          Programador Full Stack da Scoreplan. Aqui compartilho vários
          conhecimentos, espero que aprenda algo novo :)
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />

        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do Antônio Evaldo sorrindo"
        />
      </div>
    </div>
  );
};

export default Banner;
