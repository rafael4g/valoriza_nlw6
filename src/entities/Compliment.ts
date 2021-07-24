import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Tag } from './Tag';
import { User } from './User';

@Entity("compliments")
class Compliments {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;

    /* Join usado pra especificar a coluna que esta sendo usada*/
    @JoinColumn({ name: "user_sender" })
    @ManyToOne(() => User)
    userSender: User;

    @Column()
    user_receiver: string;

    /* Join usado pra especificar a coluna que esta sendo usada*/
    @JoinColumn({ name: "user_receiver" })
    @ManyToOne(() => User)
    userReceiver: User;

    @Column()
    tag_id: string;

    /* Join usado pra especificar a coluna que esta sendo usada*/
    @JoinColumn({ name: "tag_id" })
    @ManyToOne(() => Tag)
    tag: Tag;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { Compliments }