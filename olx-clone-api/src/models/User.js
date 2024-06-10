import { prisma } from "../../config/prisma.js";

export const creatUser = async (data, stateId) => {
    return await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            passwordHash: data.passwordHash,
            token: data.token,
            state: {
                connect: {
                    id: stateId,
                },
            },
        },
    });
};

