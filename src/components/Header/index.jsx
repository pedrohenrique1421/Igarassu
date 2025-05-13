import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { HandleSetFormType } from "../../manager"; // Os tipos de form estao aqui

import Img from "../../assets/logo igarassu.svg";

export default function Header({ type }) {
    return (
        <div className={styles.Container}>
            <img src={Img} alt="" />
            {!type ? (
                <NavLink to="/form">
                    <button
                        onClick={() => {
                            HandleSetFormType("agendamento");
                        }}
                    >
                        <h6>Agendar uma visita</h6>
                    </button>
                </NavLink>
            ) : (
                <></>
            )}
        </div>
    );
}
