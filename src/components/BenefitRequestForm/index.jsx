import styles from "./styles.module.css";

export default function BenefitRequestForm() {
    return (
        <div className={styles.Container}>
            <h1>Solicitação de Benefício</h1>
            <div className={styles.content}>
                <input type="text" placeholder="Nome do Beneficiário" />
                <input type="text" placeholder="Tipo de Benefício" />
                <textarea placeholder="Descrição da solicitação" rows={4} />
                <input type="submit" value="Enviar solicitação" />
            </div>
        </div>
    );
}
