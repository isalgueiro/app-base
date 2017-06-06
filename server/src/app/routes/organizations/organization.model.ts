import { Collection, Index, Instance, Model, ObjectID, Property, Transform } from 'iridium';

export interface IOrganizationDocument {
    _id?: string;
    name: string;
    email: string;
    phone: string;
    url: string;
    address: any;
    description: string;
    image: string;
    standardPrice: number;
    reducedPrice: number;
}

@Collection('organizations')
export class Organization extends Instance<IOrganizationDocument, Organization> implements IOrganizationDocument {
    @ObjectID public _id: string;
    @Property(String, true)
    public name: string;
    @Property(String, true)
    public email: string;
    @Property(String, true)
    public phone: string;
    @Property(String, true)
    public url: string;
    @Property(String, true)
    public address: any;
    @Property(String, true)
    public description: string;
    @Property(String, true)
    public image: string;
    @Property(Number, true)
    public standardPrice: number;
    @Property(Number, true)
    public reducedPrice: number;
}
