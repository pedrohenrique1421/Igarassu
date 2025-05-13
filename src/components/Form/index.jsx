import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Form({ type }) {
    const navigate = useNavigate();

    switch (type) {
        case "agendamento":
            return <Agendamento />;
        default:
            const [count, setCount] = useState(10);

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
                <div>
                    <h1>Error 404</h1>
                    <h6>
                        Redirecionando para tela inicial em {count.toFixed(1)}{" "}
                        segundos
                    </h6>
                </div>
            );
    }
}

function Agendamento() {
    return <h1>Olá Agendamento</h1>;
}
