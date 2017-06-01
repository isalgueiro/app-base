import { ObjectID } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity('credentials')
export class Credential {
  @ObjectIdColumn()
  public id: ObjectID;

  @Column()
  public userId: ObjectID;

  @Column()
  public password: string;
}
