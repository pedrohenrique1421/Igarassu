import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { HandleSetFormType } from "../../manager"; // Os tipos de form estao aqui
import { useNavigate } from "react-router-dom";

import Img from "../../assets/logo igarassu.svg";
import Img2 from "../../assets/BAckArrow.svg";

export default function Header({ type }) {
    const navigate = useNavigate();
    console.log(type, typeof type);
    switch (type) {
        case "clean":
            return (
                <div
                    className={styles.Container}
                    style={{
                        padding: "0 2.5rem 0 2.5rem",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        backgroundColor: "#c5dfd0",
                    }}
                >
                    <img
                        src={Img}
                        style={{ width: "3rem", cursor: "pointer" }}
                        onClick={() => {
                            navigate("/");
                        }}
                        alt=""
                    />
                    <div className={styles.halfLine} />
                </div>
            );
        case "minimal":
            return (
                <div className={styles.Container}>
                    <img
                        src={Img}
                        onClick={() => {
                            navigate("/");
                        }}
                        alt=""
                    />
                    <button
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <img src={Img2} alt="" />
                        <h6>Voltar</h6>
                    </button>
                </div>
            );
        case "home":
            return (
                <div className={styles.Container}>
                    <img
                        src={Img}
                        onClick={() => {
                            navigate("/");
                        }}
                        alt=""
                    />

                    <NavLink to="/form" style={{ textDecoration: "none" }}>
                        <button
                            onClick={() => {
                                HandleSetFormType("agendamento");
                            }}
                        >
                            <h6>Agendar uma visita</h6>
                        </button>
                    </NavLink>
                </div>
            );
    }
}
