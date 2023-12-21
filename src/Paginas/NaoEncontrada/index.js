import BotaoPrincipal from "componentes/BotaoPrincipal";
import styles from "./naoEncontrada.module.css"
import erro404 from "assets/erro_404.png"
import { useNavigate } from "react-router-dom";

const NaoEncontrada = () => {
    const navigate = useNavigate()
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
            <div className={styles.botaoContainer} 
            onClick={() => {
                // O react router ele mantém uma pilha de navegação, posso ir selecionando para onde eu vou
                navigate(-1)
            }}>
                <BotaoPrincipal size={"lg"}>Voltar</BotaoPrincipal>
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