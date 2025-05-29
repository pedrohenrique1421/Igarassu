import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BenefitRequestForm() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [selectedSolicitacao, setSelectedSolicitacao] = useState(null);

    const solicitacoes = [
        {
            nome: "Evelyn Alves",
            tipo: "Cesta Básica",
            status: "Pendente",
            horario: "10:31",
            data: "01/01/2025-",
            id: "3A15SD57E",
            foto: "https://i.pravatar.cc/40"
        },
        {
            nome: "Rafael Santos",
            tipo: "Auxílio Fune.",
            status: "Pendente",
            horario: "16:40",
            data: "27/01/2025-",
            id: "65A2S1354",
            foto: "https://i.pravatar.cc/40"
        },
        {
            nome: "Mara Luiza",
            tipo: "Cesta Básica.",
            status: "Pendente",
            horario: "18:37",
            data: "14/02/2025-",
            id: "65A2S1354",
            foto: "https://i.pravatar.cc/40"
        },
        {
            nome: "José Filipe",
            tipo: "Cesta Básica.",
            status: "Pendente",
            horario: "13:21",
            data: "15/02/2025-",
            id: "65A2S1354",
            foto: "https://i.pravatar.cc/40"
        },
        {
            nome: "Yuri Oliveira",
            tipo: "Auxílio Fune.",
            status: "Pendente",
            horario: "08:48",
            data: "07/03/2025-",
            id: "65A2S1354",
            foto: "https://i.pravatar.cc/40"
        },
        {
            nome: "Macio Silva",
            tipo: "Cesta Básica.",
            status: "Pendente",
            horario: "11:32",
            data: "09/03/2025-",
            id: "65A2S1359",
            foto: "https://i.pravatar.cc/40"
        }
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.Container}>
                {!selectedSolicitacao ? (
                    <>
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
                                .filter((s) =>
                                    s.id.includes(search.toUpperCase())
                                )
                                .map((s, idx) => (
                                    <div key={idx} className={styles.tableRow}>
                                        <span
                                            className={styles.nome}
                                            onClick={() => setSelectedSolicitacao(s)}
                                            style={{ cursor: "pointer", color: "#2563eb" }}
                                        >
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
                    </>
                ) : (
                    <div className={styles.detalhesSolicitacao}>
                        <button
                            className={styles.voltarBtn}
                            onClick={() => setSelectedSolicitacao(null)}
                        >
                            ← Voltar
                        </button>
                        <div className={styles.cabecalho}>
                            <img
                                src={selectedSolicitacao.foto}
                                alt="foto"
                                className={styles.fotoGrande}
                            />
                            <h2>{selectedSolicitacao.nome}</h2>
                            <p><strong>Tipo:</strong> {selectedSolicitacao.tipo}</p>
                            <p><strong>Status:</strong> {selectedSolicitacao.status}</p>
                            <p><strong>Data:</strong> {selectedSolicitacao.data}</p>
                            <p><strong>Horário:</strong> {selectedSolicitacao.horario}</p>
                            <p><strong>ID:</strong> {selectedSolicitacao.id}</p>
                        </div>

                        <div className={styles.descricao}>
                            <h3>Descrição da Solicitação</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fusce scelerisque enim justo, dignissim aliquam metus iaculis non. 
                                Duis blandit nibh at ex lacinia condimentum. Etiam in felis sed leo eleifend porta.
                            </p>
                            <p>
                                Sed ultrices elementum nunc, at interdum augue mattis in. 
                                Proin eget nulla cursus, mollis felis at, lacinia tellus.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
