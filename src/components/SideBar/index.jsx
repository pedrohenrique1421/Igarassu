import styles from "./styles.module.css";

export default function SideBar({ selected }) {
    return (
        <div className={styles.Container}>
            {selected == 1 ? (
                <div
                    className={styles.item}
                    style={{ backgroundColor: "var(--color-green-100)" }}
                >
                    <h3>Solicitantes</h3>
                </div>
            ) : (
                <div className={styles.item}>
                    <h3>Solicitantes</h3>
                </div>
            )}
            {selected == 2 ? (
                <div
                    className={styles.item}
                    style={{ backgroundColor: "var(--color-green-100)" }}
                >
                    <h3>Solicitar Beneficio</h3>
                </div>
            ) : (
                <div className={styles.item}>
                    <h3>Solicitar Beneficio</h3>
                </div>
            )}
        </div>
    );
}
