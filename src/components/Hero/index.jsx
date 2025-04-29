import styles from "./styles.module.css";

import HeroImg from "../../assets/Hero.png";

export default function Hero() {
  return (
    <div
      className={styles.Container}
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <h1>Apoio para quem mais precisa!</h1>
      <h3>Solicite a visita de um Assistente Social na sua residência</h3>
      <button>
        <h6>Solicitar Assistente</h6>
      </button>
    </div>
  );
}
