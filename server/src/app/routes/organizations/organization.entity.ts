import { ObjectID } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity('organizations')
export class Organization {
  @ObjectIdColumn()
  public id: ObjectID;
  @Column()
  public name: string;
  @Column()
  public email: string;
  @Column()
  public phone: string;
  @Column()
  public url: string;
  @Column()
  public address: any;
  @Column()
  public description: string;
  @Column()
  public image: string;
  @Column()
  public standardPrice: number;
  @Column()
  public reducedPrice: number;
}
