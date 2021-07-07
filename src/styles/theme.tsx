import {DefaultTheme} from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    primary: {
      color1: string;
      color2: string;
      color3: string;
      color4: string;
      color5: string;
      color6: string;
      color7: string;
    };
    secondary: {
      color1: string;
      color2: string;
      color3: string;
      color4: string;
      color5: string;
      color6: string;
      color7: string;
      color8: string;
    };
  }
}

export const theme: DefaultTheme = {
  backgroundColor: '#ffffff',
  primary: {
    color1: '#030f27',
    color2: '#fdbe33',
    color3: '#121518',
    color4: '#00acee',
    color5: '#3b5998',
    color6: '#0e76a8',
    color7: '#3f729b',
  },
  secondary: {
    color1: '#666666',
    color2: '#ffffff',
    color3: '#dddddd',
    color4: '#f3f6ff',
    color5: '#999999',
    color6: '#f8f9fa',
    color7: '#000000',
    color8: 'rgba(0, 0, 0, 0.3)',
  },
};
