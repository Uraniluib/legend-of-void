import { makeStyles } from "@material-ui/core";
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#c7cceb',
      main: '#959dcf',
      dark: '#6d75a3',
      contrastText: '#000212',
    },
    secondary: {
      light: '#d8f2bb',
      main: '#abd180',
      dark: '#71914d',
      contrastText: '#091200',
    }
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#4f5b62',
      main: '#4e6773',
      dark: '#000a12',
      contrastText: '#d8e1e6',
    },
    secondary: {
      light: '#6a4f4b',
      main: '#3e2723',
      dark: '#1b0000',
      contrastText: '#f5eceb',
    }
  },
});

export const useStyles = makeStyles((theme) => ({
  appContainer: {
    padding: '0 0 2em 0'
  },
  scrollTopStyle: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
}));