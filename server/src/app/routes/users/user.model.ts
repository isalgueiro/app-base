import { Collection, Index, Instance, Model, ObjectID, Property, Transform } from 'iridium';
import { ROLE, STATUS } from "../../core/shared/enums";

export interface IUserDocument {
    _id?: string;
    name: string;
    email: string;
    phone?: string;
    roles: ROLE[];
    organizationId?: string;
    status: STATUS;
}

@Index({ email: 1 }, { unique: true })
@Collection('users')
export class User extends Instance<IUserDocument, User> implements IUserDocument {
    @ObjectID public _id: string;
    @Property(String, true)
    public name: string;
    @Property(String, true)
    public email: string;
    @Property(String, false)
    public phone: string;
    @Property(String, false)
    public organizationId: string;
    @Property([ROLE], false)
    public roles: ROLE[];
    @Property(STATUS, false)
    public status: STATUS;
}
