import Global from "./global";

const HandleSetFormType = (type) => { // tipos de form
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

const HandleLogin = (email, senha, navigate) => {
    // simular loguin bem sucedido
    // adicionar lógica de autenticação real aqui dps:
    console.log("Login simulado com:", email, senha);
    navigate("/dashboard"); // Redirecionar pro dashboard
};

export { HandleSetFormType, HandleGetFormType, HandleLogin };
