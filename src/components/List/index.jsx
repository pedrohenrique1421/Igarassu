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

function Solicitantes() {
    return (
        <div className={styles.Container}>
            <input
                type="text"
                name="SeachBar"
                placeholder="Pesquisar por NIS"
            />
            <div className={styles.lista}>
                <div className={styles.itemLista}>
                    <p>Ronaldo</p>
                </div>
            </div>
        </div>
    );
}
