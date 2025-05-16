import { useState } from "react";
import Global from "./global";

const HandleSetFormType = (type) => {
    switch (type) {
        case "agendamento":
            Global.formType = "agendamento";
            break;
        case "login":
            Global.formType = "login";
            break;
        case "cadSolicitante":
            Global.formType = "cadSolicitante";
            break;
        case "solicitacao":
            Global.formType = "solicitacao";
            break;
        case "cadSolicitante":
            Global.formType = "cadSolicitante";
            break;
        case "entrega":
            Global.formType = "entrega";
            break;
        default:
            throw new Error("tipo de form não existente");
            break;
    }
};

const HandleGetFormType = () => {
    return Global.formType;
};

const HandleLogin = (email, senha) => {
    // Aqui entra a função de login do back,
    // que deve retornar se o user existe e as informações dele
    // FUNÇÃO QUEBRADA para DESENVOLVIMENTO

    if (email == "assistente") {
        return {
            status: true,
            user: {
                id: 1,
                nome: "João",
                email: "joao@gmail.com",
                cpf: "123456789-00",
                solicitantes: [
                    // solicitantes cadastrados pelo assistente
                    {
                        foto: "foto1.jpg",
                        nome: "Solicitante 1",
                        telefone: "123456789",
                        email: "solicitante1@gmail.com",
                        cpf: "123456789",
                        nis: "234589651",
                    },
                    {
                        foto: "foto1.jpg",
                        nome: "Solicitante 1",
                        telefone: "123456789",
                        email: "solicitante1@gmail.com",
                        cpf: "123456789",
                        nis: "543236987",
                    },
                    {
                        foto: "foto1.jpg",
                        nome: "Solicitante 1",
                        telefone: "123456789",
                        email: "solicitante1@gmail.com",
                        cpf: "123456789",
                        nis: "154587952",
                    },
                    {
                        foto: "foto1.jpg",
                        nome: "Solicitante 1",
                        telefone: "123456789",
                        email: "solicitante1@gmail.com",
                        cpf: "123456789",
                        nis: "349167485",
                    },
                ],
            },
        };
    }
};

export { HandleSetFormType, HandleGetFormType, HandleLogin };
