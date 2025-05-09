import styles from "./styles.module.css";

import Img1 from "../../assets/Voluntario.png";
import Img2 from "../../assets/Cesta.png";

export default function Login() {
    return (
        <div className={styles.Container}>
            <div className={styles.box}>
                <img src={Img1} alt="" />
                <button>Sou Assistente</button>
            </div>
            <div className={styles.box}>
                <img src={Img2} alt="" />
                <button>Sou Beneficiario</button>
            </div>
        </div>
    );
}
