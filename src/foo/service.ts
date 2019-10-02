import { EBar, IBaz, IData } from '../types';

export const methodA = (data: IData) => console.log('methodA', data);

export const methodB = (baz: IBaz) => console.log('methodB', baz);

export const methodC = (val: string): IData => {
  console.log('methodC', val);

  const data: IData = {
    bar: val as EBar.a,
    baz: []
  };

  return data;
}
