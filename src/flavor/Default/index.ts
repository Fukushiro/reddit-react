import { ReactComponent as Logo } from '../../img/reddit-logo.svg';
import { ReactComponent as LogoSmall } from '../../img/reddit-logo-small.svg';
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
    //header search
    textSearchBackground: string;
    textSearchFontColor: string;
    textSearchPlaceholderFontColor: string;
    textSearchIconColor: string;
    textSearchBorderColor: string;
  };

  strings: {
    test: string;
  };

  images: { logo: any; logoSmall: any };
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
    textSearchBackground: '#1e2122',
    textSearchFontColor: '#b6b3ae',
    textSearchPlaceholderFontColor: '#40403e',
    textSearchIconColor: '#827d71',
    textSearchBorderColor: '#6f675c',
  },
  strings: {
    test: 'teste',
  },
  images: { logo: Logo, logoSmall: LogoSmall },
  icons: {
    blackDownArrow: IoIosArrowDropdown,
    blackUpArrow: IoIosArrowDropup,
    whiteDownArrow: IoIosArrowDropdownCircle,
    whiteUpArrow: IoIosArrowDropupCircle,
  },
};

export type { IFlavor };
