import {ThemeProvider} from '@mui/material/styles';

// Imports from my application
import AppBar from 'components/organisms/AppBar';
import Footer from 'containers/Footer/Footer';
import {theme as muiTheme} from 'styles/materialUI';
import './mainTemplate.scss';

export default function MainTemplate({children, isAppBarSolidBackground}) {
  return (
    <ThemeProvider theme={muiTheme}>
      <AppBar isSolidBackground={isAppBarSolidBackground} />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
