import styles from "./banner.module.css";
import circuloColorido from "../../assets/circulo_colorido.png";
import minhaFoto from "../../assets/minha_foto.png";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.appresentation}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>

        <p className={styles.paragrago}>Lorem Ipsum;</p>
      </div>

      <div styles={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt="Círculo colorido"
        />

        <img className={styles.minhaFoto} src={minhaFoto} alt="Foto Sorrindo" />
      </div>
    </div>
  );
};

export default Banner;
