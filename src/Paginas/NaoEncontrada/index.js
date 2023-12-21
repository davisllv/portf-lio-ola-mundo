import styles from "./naoEncontrada.module.css"
import erro404 from "assets/erro_404.png"

const NaoEncontrada = () => {
    return(
        <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>
                404
            </span>

            <h1 className={styles.titulo}>
                Ops! Página não Encontrada.
            </h1>
            <p className={styles.paragrafo}>
                Tem certeza que era isso que estava procurando?
            </p>
            <p className={styles.paragrafo}>
                Aguarde uns instantes e recarregue a página, obrigado.
            </p>
            <div className={styles.botaoContainer}>
                <button>
                    Voltar
                </button>
            </div>
                <img 
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt="Cachorro"
                />
        </div>
        <div className={styles.espacoEmBranco}>

        </div>
        </>
    )
}

export default NaoEncontrada;