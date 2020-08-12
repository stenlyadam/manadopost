const mainColors = {
  blue1: '#024D91',
  blue2: '#0058A9',
  blue3: '#CEF3FF',
  blue4: '#179AE5',
  dark1: '#112340',
  dark2: '#7D8797',
  dark3: '#012445',
  grey1: '#929292',
  grey2: '#505050',
  grey3: '#F5F5F5',
  grey4: '#E9E9E9',
  grey5: '#BABABA',
  grey6: '#787878',
  white: '#FFFFFF',
  red1: '#C02F01',
  red2: '#E06379',
  red3: '#FEDCE2',
  red4: '#E5176E',
  green1: '#3EED00',
  green2: '#E9FEDC',
  green3: '#F5FFB4',
  green4: '#1D9885',
  purple1: '#FDDCFE',
  purple2: '#7C0A94',
  brown1: '#FFEBCF',
  brown2: '#583B13',
  yellow1: '#EDC700',
};

export const colors = {
  primary: mainColors.blue1,
  secondary: mainColors.blue2,
  tertiary: mainColors.grey1,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.dark2,
    tertiary: mainColors.dark3,
    fourth: mainColors.grey1,
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
  kawanua: {
    aerial: {
      background: mainColors.purple1,
      text: mainColors.purple2,
    },
    rekreasi: {
      background: mainColors.green2,
      text: mainColors.green4,
    },

    hotel: {
      background: mainColors.blue3,
      text: mainColors.blue4,
    },

    shop: {
      background: mainColors.red3,
      text: mainColors.red4,
    },
    sport: {
      background: mainColors.green3,
      text: mainColors.green4,
    },
    budaya: {
      background: mainColors.brown1,
      text: mainColors.brown2,
    },
  },
  covid: {
    positif: mainColors.yellow1,
    sembuh: mainColors.green1,
    meninggal: mainColors.red2,
  },
};
