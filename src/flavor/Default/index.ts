import { ReactComponent as Logo } from '../../img/reddit-logo.svg';
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropdown,
  IoIosArrowDropupCircle,
  IoIosArrowDropup,
} from 'react-icons/io';
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
  icons: {
    whiteUpArrow: any;
    blackUpArrow: any;
    whiteDownArrow: any;
    blackDownArrow: any;
  };
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
  icons: {
    blackDownArrow: IoIosArrowDropdown,
    blackUpArrow: IoIosArrowDropup,
    whiteDownArrow: IoIosArrowDropdownCircle,
    whiteUpArrow: IoIosArrowDropupCircle,
  },
};

export type { IFlavor };
