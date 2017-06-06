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
  @ObjectID
  public _id: string;
  @Property(String, true)
  public name: string;
  @Property(String, false)
  public email: string;
  @Property(String, false)
  public phone: string;
  @Property(String, false)
  public url: string;
  @Property(String, false)
  public address: any;
  @Property(String, false)
  public description: string;
  @Property(String, false)
  public image: string;
  @Property(Number, false)
  public standardPrice: number;
  @Property(Number, false)
  public reducedPrice: number;
}
