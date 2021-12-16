import { makeStyles } from "@material-ui/core";
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        light: '#f8fdff',
        main: '#c5cae9',
        dark: '#9499b7',
        contrastText: '#0f0f0f',
      },
      secondary: {
        light: '#f8ffd7',
        main: '#c5e1a5',
        dark: '#94af76',
        contrastText: '#0f0f0f',
      }
    },
  });
  
  export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        light: '#4f5b62',
        main: '#263238',
        dark: '#000a12',
        contrastText: '#fafafa',
      },
      secondary: {
        light: '#6a4f4b',
        main: '#3e2723',
        dark: '#1b0000',
        contrastText: '#fafafa',
      }
    },
  });

export const useStyles = makeStyles((theme) => ({
    appContainer: {
        padding: '0 0 2em 0'
    }
}));