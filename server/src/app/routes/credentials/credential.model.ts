import { Collection, Instance, ObjectID, Property } from 'iridium';
export interface ICredentialDocument {
    _id?: string;
    userId: string;
    password: string;
}

@Collection('credentials')
export class Credential extends Instance<ICredentialDocument, Credential> implements ICredentialDocument {
    @ObjectID public _id?: string;
    @Property(String, true)
    public userId: string;
    @Property(String, true)
    public password: string;
}
