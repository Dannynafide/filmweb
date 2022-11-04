import {createTheme} from '@mui/material/styles';
import constants from 'styles/constants.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: constants.pageColor_primary,
      fontColor: constants.fontColor_primary,
    },
    fb: {
      main: '#1a77f2',
      fontColor: constants.fontColor_light,
    },
    none: {
      main: '#nnn',
      fontColor: constants.fontColor_primary,
      fontColorSecondary: constants.fontColor_secondary,
    },
  },
});

export {theme};
