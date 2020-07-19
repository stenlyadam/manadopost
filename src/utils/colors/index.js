const mainColors = {
  blue1: '#024D91',
  blue2: '#0058A9',
  dark1: '#112340',
  dark2: '#7D8797',
  dark3: '#012445',
  grey1: '#929292',
  grey2: '#505050',
  grey3: '#F5F5F5',
  grey4: '#E9E9E9',
  grey5: '#BABABA',
  white: '#FFFFFF',
  red1: '#C02F01',
  red2: '#E06379',
  green1: '#3EED00',
};

export const colors = {
  primary: mainColors.blue1,
  secondary: mainColors.blue2,
  tertiary: mainColors.grey1,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.dark2,
    tertiary: mainColors.dark3,
  },
  white: mainColors.white,
  border: mainColors.grey4,
  border2: mainColors.grey5,
  button: {
    primary: {
      background: mainColors.blue1,
      text: mainColors.white,
    },
    secondary: {
      background: mainColors.red1,
      text: mainColors.white,
    },
    tertiary: {
      background: mainColors.green1,
      text: mainColors.blue1,
    },
  },
  cardBackground: mainColors.grey3,
  error: mainColors.red2,
};
