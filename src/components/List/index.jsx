import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export default function List({ selected, admPermission }) {
    const navigate = useNavigate();
    switch (selected) {
        case 1:
            return <Solicitantes />;
        case 2:
            return;
        case 3:
            if (admPermission) {
                return;
            } else {
                navigate("/");
            }
            break;
        default:
            navigate("/");
            break;
    }
}

import img from "../../assets/Search.svg";
import dataBene from "../../manager/exem.js";
import { useEffect, useState, useRef } from "react";
import { HandleSetFormType } from "../../manager/index.js";

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

function Solicitantes() {
    const [bene, setBene] = useState([]);
    const navigate = useNavigate();
    const jaExecutou = useRef(false);

    function RenderizarLista(data) {
        // Ordena o array pelo campo 'nome', ignorando maiúsculas/minúsculas
        const dataOrdenada = [...data].sort((a, b) =>
            a.nome.toLowerCase().localeCompare(b.nome.toLowerCase())
        );

        const lista = [];
        dataOrdenada.forEach((e, index) => {
            const id = index + 1;
            lista.push(
                <ListaItem
                    key={id}
                    nome={e.nome}
                    cpf={e.cpf}
                    nis={e.nis}
                    cep={e.cep}
                    styler={id % 2 === 0 ? styles.itemA : styles.itemB}
                />
            );
        });
        return lista;
    }

    useEffect(() => {
        if (jaExecutou.current) return;
        jaExecutou.current = true;

        // Função que você quer rodar só uma vez
        setBene(RenderizarLista(dataBene));
    }, []);

    return (
        <div className={styles.Container}>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    name="SeachBar"
                    placeholder="Pesquisar por NIS..."
                />
                <img
                    src={img}
                    title="Pesquisar"
                    className={styles.search}
                    alt=""
                />
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
                Adicionar Beneficiario
            </button>
        </div>
    );
}
