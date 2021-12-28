import { makeStyles } from "@material-ui/core";
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#eceff1',
      main: '#b0bec5',
      dark: '#78909c',
      contrastText: '#263238',
    }
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#546e7a',
      main: '#455a64',
      dark: '#263238',
      contrastText: '#eceff1',
    }
  },
});

export const useStyles = makeStyles((theme) => ({
  scrollTopStyle: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));