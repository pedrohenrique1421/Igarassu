import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Form({ type }) {
    switch (type) {
        case "agendamento":
            return <Agendamento />;
        default:
            return <ErrorPage />;
    }
}

//#region Agendamento
function Agendamento() {
    const [ajuda, setAjuda] = useState(false);
    return (
        <div className={styles.Container}>
            {!ajuda ? (
                <div className={styles.content}>
                    <h1>Agendamento de visita</h1>
                    <div className={styles.line} />
                    <input type="text" placeholder="Situação" />
                    <input type="text" placeholder="Descrição | Endereço" />
                    <input type="submit" value="Fazer Agendamento" />
                </div>
            ) : (
                <div className={styles.content}>
                    <h1>Agendamento de visita</h1>
                    <div className={styles.line} />
                    <p>
                        Agende uma visita do assistente social à sua residência
                        para fazer a solicitação de um benefício
                    </p>
                </div>
            )}
            <h2
                onClick={() => {
                    setAjuda(!ajuda);
                }}
            >
                Precisa de ajuda?
            </h2>
        </div>
    );
}

//#endregion

//#region Error
function ErrorPage() {
    const [count, setCount] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev <= 0) {
                    clearInterval(interval); // Para o intervalo
                    navigate("/"); // Redireciona quando o contador atinge 0
                    return prev; // Evita atualização adicional do estado
                }
                return prev - 1; // Atualiza o estado
            });
        }, 1000);

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <div className={styles.Container}>
            <div className={styles.content}>
                <h1>Error 404</h1>
                <div className={styles.line} />
                <h4>
                    Redirecionando para tela inicial em {count.toFixed(1)}{" "}
                    segundos
                </h4>
            </div>
        </div>
    );
}

//#endregion
