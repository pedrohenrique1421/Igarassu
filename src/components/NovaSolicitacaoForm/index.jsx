import styles from "./novaSolicitacao.module.css";
import { useNavigate } from "react-router-dom";

export default function NovaSolicitacaoForm() {
    const navigate = useNavigate();

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.card}>
                <h2>Solicitação</h2>
                <hr />
                <input type="text" placeholder="ID do Solicitante" />
                <input type="text" placeholder="Auxílio" />
                <textarea placeholder="Descrição..."></textarea>
                <button>Fazer Solicitação</button>
            </div>
            <p className={styles.ajuda}>Precisa de ajuda?</p>
        </div>
    );
}
