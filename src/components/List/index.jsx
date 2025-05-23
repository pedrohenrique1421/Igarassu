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
import { useState } from "react";

function Solicitantes() {
    const [bene, setBene] = useState([]);

    const RenderizarLista = () => {};
    return (
        <div className={styles.Container}>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    name="SeachBar"
                    placeholder="Pesquisar por NIS..."
                />
                <img src={img} className={styles.search} alt="" />
            </div>
            <div className={styles.lista}>
                <div className={styles.header}>
                    <h3>Nome</h3>
                    <h3>CPF</h3>
                    <h3>Email</h3>
                    <h3>Idade</h3>
                    <h3>Telefone</h3>
                </div>
                <div className={styles.itemsLista}>
                    {/* Aqui entra os componentes dinamiocos */}
                </div>
            </div>
        </div>
    );
}
