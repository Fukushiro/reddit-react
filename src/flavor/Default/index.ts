import { ReactComponent as Logo } from '../../img/reddit-logo.svg';
interface IFlavor {
  colors: {
    color1: string;
    color2: string;
    color3: string;
    background: string;
    backgroundCard: string;
    // textField
    textFieldTextColor: string;
  };

  strings: {
    test: string;
  };

  images: { logo: any };
}

export const Default: IFlavor = {
  colors: {
    color1: 'red',
    color2: 'green',
    color3: 'blue',
    background: '#13171a',
    backgroundCard: '#2b2b2c',
    textFieldTextColor: '#ffffff',
  },
  strings: {
    test: 'teste',
  },
  images: { logo: Logo },
};

export type { IFlavor };
