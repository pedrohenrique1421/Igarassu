import styles from "./styles.module.css";

export default function SideBar({ selected, setValue, admPermission }) {
    if (admPermission) {
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
                    <div
                        className={styles.item}
                        onClick={() => {
                            setValue(1);
                        }}
                    >
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
                    <div
                        className={styles.item}
                        onClick={() => {
                            setValue(2);
                        }}
                    >
                        <h3>Solicitar Beneficio</h3>
                    </div>
                )}
                {selected == 3 ? (
                    <div
                        className={styles.item}
                        style={{ backgroundColor: "var(--color-green-100)" }}
                    >
                        <h3>Assistentes Sociais</h3>
                    </div>
                ) : (
                    <div
                        className={styles.item}
                        onClick={() => {
                            setValue(3);
                        }}
                    >
                        <h3>Assistentes Sociais</h3>
                    </div>
                )}
            </div>
        );
    } else {
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
                    <div
                        className={styles.item}
                        onClick={() => {
                            setValue(1);
                        }}
                    >
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
                    <div
                        className={styles.item}
                        onClick={() => {
                            setValue(2);
                        }}
                    >
                        <h3>Solicitar Beneficio</h3>
                    </div>
                )}
            </div>
        );
    }
}
