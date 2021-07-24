import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuid } from 'uuid'


@Entity("users") // a tabela que esta referenciando
class User {
    @PrimaryColumn()
    readonly id: string; // readonly é para: apenas leitura

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @Exclude()
    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    /* toda vez que não existir id é criado nova id */
    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { User };
