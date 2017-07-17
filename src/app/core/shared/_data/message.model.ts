export interface IMessage {
  level: Level;
  text: string;
}

export enum Level {
  PRIMARY,
  SUCCESS,
  WARNING,
  ERROR
}
