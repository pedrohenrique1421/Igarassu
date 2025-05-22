import styles from "./styles.module.css";

export default function List() {
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
