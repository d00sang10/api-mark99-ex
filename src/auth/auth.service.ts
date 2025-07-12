import { PrismaClient } from "@prisma/client";
import { signToken } from "./jwt";
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const loginAuth = async (username: string, password: string) => {
    const user = await prisma.usuarios.findUnique({
        where: { username },
    });
    if (!user) {
        throw new Error('Usuario no encontrado');
    }

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
        throw new Error('Contraseña incorrecta');
    }

    const token = signToken({
        id: user.id,
        username: user.username,
        role: user.role,
    });
    return token;
};

export const registerUser = async (username: string, password: string) => {

    const existing = await prisma.usuarios.findUnique({ where: { username } });

    if (existing) {
        throw new Error('El usuario ya existe');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await prisma.usuarios.create({
        data: {
            username,
            password: hashedPassword,
        },
        select: {
            id: true,
            username: true,
            role: true,
        },
    });
    return user;
};



