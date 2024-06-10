import { findAllStates } from "../models/State.js";

export const getStates = async (req, res) => {
    try {
        const states = await findAllStates();
        res.status(200).json({ states });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to get states", message: error.message });
    }
}

//controller recebe a requisição do ato e envia comando para aquele que é responsável (tipo model)
// e depois retorna a resposta para o usuario (sucesso/erro)