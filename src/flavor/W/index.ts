import { Default, IFlavor } from '../Default';
console.log(Default);

export const W: IFlavor = {
  ...Default,
  ...{
    colors: { ...Default.colors, color1: 'yellow', color2: 'red' },
    strings: { test: 'testeW' },
  },
};
