import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BenefitRequestForm() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    // Exemplo de dados (poderia vir de uma API ou contexto global)
    const solicitacoes = [
        {
            nome: "Evelyn Alves",
            tipo: "Cesta Básica",
            status: "Pendente",
            horario: "10:31",
            data: "01/01/2025",
            id: "3A15SD57E",
            foto: "https://i.pravatar.cc/40"
        },
        {
            nome: "Rafael Santos",
            tipo: "Auxílio Fune.",
            status: "Pendente",
            horario: "16:40",
            data: "01/01/2025",
            id: "65A2S1354",
            foto: "https://i.pravatar.cc/40"
        },
        // ...outros dados
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.Container}>
                <div className={styles.headerSearch}>
                    <input
                        type="text"
                        placeholder="Pesquisar por Id. Solici..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className={styles.tableArea}>
                    <div className={styles.tableHeader}>
                        <span>Nome</span>
                        <span>Solicitação</span>
                        <span>Status</span>
                        <span>Horário</span>
                        <span>Data</span>
                        <span>Id. Solici.</span>
                    </div>
                    {solicitacoes
                        .filter((s) => s.id.includes(search.toUpperCase()))
                        .map((s, idx) => (
                            <div key={idx} className={styles.tableRow}>
                                <span className={styles.nome}>
                                    <img src={s.foto} alt="foto" /> {s.nome}
                                </span>
                                <span>{s.tipo}</span>
                                <span>{s.status}</span>
                                <span>{s.horario}</span>
                                <span>{s.data}</span>
                                <span>{s.id}</span>
                            </div>
                        ))}
                </div>

                <button
                    className={styles.btnNovaSolicitacao}
                    onClick={() => navigate("/nova-solicitacao")}
                >
                    Fazer Nova Solicitação
                </button>
            </div>
        </div>
    );
}
