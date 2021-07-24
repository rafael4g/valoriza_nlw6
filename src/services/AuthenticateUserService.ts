import { getCustomRepository } from "typeorm"
import { compare } from 'bcryptjs';
import { UsersRepositories } from "../repositories/UsersRepositories"
import { sign } from 'jsonwebtoken'

interface IAuthenticateUserService {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateUserService) {
        const userRepositories = getCustomRepository(UsersRepositories);

        // Verificar se e-mail exists
        const user = await userRepositories.findOne({
            email
        })

        if (!user) {
            throw new Error("Email/Password incorrect")
        }

        // Verficar se sehha esta correta
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }
        // Gerar token
        const token = sign(
            {
                email: user.email
            },process.env.COD_JWT,
            {
                subject: user.id,
                expiresIn: "1d"
            }
        );

        return token;

    }
}

export { AuthenticateUserService }