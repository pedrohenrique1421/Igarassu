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

export { HandleSetFormType, HandleGetFormType };
