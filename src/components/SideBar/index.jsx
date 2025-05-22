import styles from "./styles.module.css";

export default function SideBar() {
    return (
        <div className={styles.Container}>
            <div className={styles.item}>
                <h3>Solicitantes</h3>
            </div>
            <div className={styles.item}>
                <h3>Solicitar Beneficio</h3>
            </div>
        </div>
    );
}
