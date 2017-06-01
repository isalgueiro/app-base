import { ObjectID } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { STATUS, ROLE } from "../../core/shared/enums";

@Entity('users')
export class User {
    @ObjectIdColumn()
    public id: ObjectID;
    @Column()
    public name: string;
    @Column()
    public email: string;
    @Column()
    public phone: string;
    @Column()
    public roles: ROLE[];
    @Column()
    public organizationId: ObjectID;
    @Column()
    public status: STATUS;
}


