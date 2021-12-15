import * as React from 'react';
import './App.css';
import Header from './Header';
import { useStyles } from './useStyles';
import IconButton from '@mui/material/IconButton';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ScrollTop } from "../components/ScrollTop"
import { Copyright } from "../components/Copyright";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import Container from "@material-ui/core/Container";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const lightTheme = createTheme({
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

const darkTheme = createTheme({
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

const App = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <div
      style={{
        backgroundColor: theme.palette.primary[theme.palette.mode],
        color: theme.palette.primary.contrastText,
      }}
    >
      <header>
        <Header {...props}>
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Header>
      </header>
      <main>
        <Container className={classes.appContainer}
          maxWidth="xl"
        >
          {props.children}
        </Container>
      </main>
      <footer>
        <Box
          style={{
            marginTop: '2em',
            paddingBottom: '1em',
          }}
        >
          <Copyright />
        </Box>
      </footer>
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>

  );
}

export default function ToggleColorMode(props) {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme.palette.mode === 'light' ? lightTheme : darkTheme}>
        <App {...props} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
