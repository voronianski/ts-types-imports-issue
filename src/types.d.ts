export enum EBar {
  a = 'a',
  b = 'b'
}

export interface IBaz {
  id: number,
  title: string
}

export interface IData {
  bar: EBar;
  baz: IBaz[];
}
