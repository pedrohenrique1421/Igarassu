import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { HandleLogin } from "../../manager";

export default function Form({ type }) {
    switch (type) {
        case "agendamento":
            return <Agendamento />;
        case "login":
            return <Login />;
        case "cadBeneficiario":
            return <CadastroBeneficiario />;
        default:
            return <ErrorPage />;
    }
}

//#region cadastro beneficiario

function CadastroBeneficiario() {
    const [ajuda, setAjuda] = useState(false);
    return (
        <div
            className={styles.Container}
            style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
        >
            {!ajuda ? (
                <div className={styles.content}>
                    <h1>Cadastro de Solicitante</h1>
                    <div className={styles.line} />
                    <input type="text" placeholder="NIS" />
                    <input type="text" placeholder="CPF" />
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="CEP" />
                    <input type="text" placeholder="Endereço" />
                    <input type="text" placeholder="Sexo" />
                    <input type="submit" value="Fazer Solicitação" />
                </div>
            ) : (
                <div className={styles.content}>
                    <h1>Cadastrar Beneficiario</h1>
                    <div className={styles.line} />
                    <p>Cadastre um novo Solicitante/Beneficiario</p>
                </div>
            )}
            <h2
                onClick={() => {
                    setAjuda(!ajuda);
                }}
            >
                Precisa de ajuda?
            </h2>
        </div>
    );
}

//#endregion

//#region Agendamento
function Agendamento() {
    const [ajuda, setAjuda] = useState(false);
    return (
        <div className={styles.Container}>
            {!ajuda ? (
                <div className={styles.content}>
                    <h1>Agendamento de visita</h1>
                    <div className={styles.line} />
                    <input type="text" placeholder="Situação" />
                    <input type="text" placeholder="Descrição | Endereço" />
                    <input type="submit" value="Fazer Agendamento" />
                </div>
            ) : (
                <div className={styles.content}>
                    <h1>Agendamento de visita</h1>
                    <div className={styles.line} />
                    <p>
                        Agende uma visita do assistente social à sua residência
                        para fazer a solicitação de um benefício
                    </p>
                </div>
            )}
            <h2
                onClick={() => {
                    setAjuda(!ajuda);
                }}
            >
                Precisa de ajuda?
            </h2>
        </div>
    );
}

//#endregion

//#region Login

function Login() {
    const [ajuda, setAjuda] = useState(false); //
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const HandleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const HandleChangeSenha = (event) => {
        setSenha(event.target.value);
    };

    const handleSubmit = () => {
        // if (!email || !senha) {
        //     setError("Por favor, preencha email e senha.");
        //     return;
        // }
        // setError("");
        // HandleLogin(email, senha, navigate, setError); // Passar o setError
        navigate("/dashboard");
    };

    return (
        <div className={styles.Container}>
            {!ajuda ? (
                <div className={styles.content}>
                    <h1>Login</h1>
                    <h6>Bem-Vindo de volta</h6>
                    <div className={styles.line} />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <input
                        type="email"
                        name="Email"
                        value={email}
                        onChange={HandleChangeEmail}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        name="Senha"
                        value={senha}
                        onChange={HandleChangeSenha}
                        placeholder="Senha"
                    />
                    <input
                        type="submit"
                        onClick={handleSubmit}
                        value="Conecte-se"
                    />
                </div>
            ) : (
                <div className={styles.content}>
                    <h1>Login</h1>
                    <div className={styles.line} />
                    <p>
                        Se você é um Assistente Social cadastrado, faça login
                        com seu email e senha.
                    </p>
                </div>
            )}
            <h2
                onClick={() => {
                    setAjuda(!ajuda);
                }}
            >
                Precisa de ajuda?
            </h2>
        </div>
    );
}
//#endregion

//#region Error
function ErrorPage() {
    const [count, setCount] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev <= 0) {
                    clearInterval(interval); // Para o intervalo
                    navigate("/"); // Redireciona quando o contador atinge 0
                    return prev; // Evita atualização adicional do estado
                }
                return prev - 1; // Atualiza o estado
            });
        }, 1000);

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <div className={styles.Container}>
            <div className={styles.content}>
                <h1>Error 404</h1>
                <div className={styles.line} />
                <h4>
                    Redirecionando para tela inicial em {count.toFixed(1)}{" "}
                    segundos
                </h4>
            </div>
        </div>
    );
}

//#endregion
