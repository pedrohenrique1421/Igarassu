import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useEffect, useState, useRef } from "react";
import { HandleSetFormType } from "../../manager/index.js";
import img from "../../assets/Search.svg";
import dataBene from "../../manager/exem.js";

// ✅ Importa o componente externo correto
import BenefitRequestForm from "../BenefitRequestForm";

// Item de lista
const ListaItem = ({ cep, cpf, nis, nome, styler }) => {
    return (
        <div className={styler}>
            <h3>{nome}</h3>
            <h3>{cpf}</h3>
            <h3>{nis}</h3>
            <h3>{cep}</h3>
        </div>
    );
};

// Lista de solicitantes
function Solicitantes() {
    const [bene, setBene] = useState([]);
    const navigate = useNavigate();
    const jaExecutou = useRef(false);

    function RenderizarLista(data) {
        const dataOrdenada = [...data].sort((a, b) =>
            a.nome.toLowerCase().localeCompare(b.nome.toLowerCase())
        );
        return dataOrdenada.map((e, index) => (
            <ListaItem
                key={index}
                nome={e.nome}
                cpf={e.cpf}
                nis={e.nis}
                cep={e.cep}
                styler={index % 2 === 0 ? styles.itemA : styles.itemB}
            />
        ));
    }

    useEffect(() => {
        if (!jaExecutou.current) {
            jaExecutou.current = true;
            setBene(RenderizarLista(dataBene));
        }
    }, []);

    return (
        <div className={styles.Container}>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    name="SeachBar"
                    placeholder="Pesquisar por NIS..."
                />
                <img src={img} title="Pesquisar" className={styles.search} alt="" />
            </div>
            <div className={styles.lista}>
                <div className={styles.header}>
                    <h3>Nome</h3>
                    <h3>CPF</h3>
                    <h3>NIS</h3>
                    <h3>CEP</h3>
                </div>
                <div className={styles.itemsLista}>{bene}</div>
            </div>
            <button
                title="Não implementada ainda"
                onClick={() => {
                    HandleSetFormType("cadBeneficiario");
                    navigate("/form");
                }}
            >
                Cadastrar novo solicitante
            </button>
        </div>
    );
}

// Componente principal
export default function List({ selected, admPermission }) {
    const navigate = useNavigate();

    switch (selected) {
        case 1:
            return <Solicitantes />;

        case 2:
            return <BenefitRequestForm />; // 

        case 3:
            if (admPermission) {
                return <div className={styles.Container}>Área restrita: Admin</div>;
            } else {
                navigate("/");
                return null;
            }

        default:
            navigate("/");
            return null;
    }
}
