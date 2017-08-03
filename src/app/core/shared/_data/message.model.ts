export interface IMessage {
  level: Level;
  text: string;
  timestamp?: Date;
}

export enum Level {
  PRIMARY,
  SUCCESS,
  WARNING,
  ERROR
}
