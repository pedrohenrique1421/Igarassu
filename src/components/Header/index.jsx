import styles from "./styles.module.css";

import Img from "../../assets/logo igarassu.svg";

export default function Header() {
  return (
    <div className={styles.Container}>
      <img src={Img} alt="" />
      <button>
        <h6>Agendar uma visita</h6>
      </button>
    </div>
  );
}
