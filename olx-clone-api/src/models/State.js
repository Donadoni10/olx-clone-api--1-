//tudo relacionado a conexão ao banco entra no model

import { prisma } from '../../config/prisma.js';

//CREATE INSERT DATA
export const createState = async (name) => {
    return await prisma.state.create({
        data: { name },
    });
};

// READ (SELECT ALL)
export const findAllStates = async () => {
    return await prisma.state.findMany();
}

// READ (SELECT BY ID OR OTHER FIELD)
export const findStateById = async () => {
    return await prisma.state.FindUnique({
        where: { id: stateId },
    });
};

// UPDATE DATA
export const updateState = async () => {
    return await prisma.state.update({
        where: {
            id,
        },
        data: {
            name: data.name,
        },
    });
};

// DELETE DATA 
export const deleteState = async (id) => {
    return await prisma.state.delete({
        where: {
            id,
        },
    });
};
