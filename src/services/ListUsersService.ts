import { getCustomRepository } from "typeorm"
import { classToPlain } from 'class-transformer';
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListUsersService{
    async execute(){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const users = await usersRepositories.find();
        // customizando retorno dos usuarios

        return classToPlain(users);
    }
}

export { ListUsersService }