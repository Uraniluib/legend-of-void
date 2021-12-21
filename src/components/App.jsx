import * as React from 'react';
import './../styles/App.css';
import Header from './Header';
import { lightTheme, darkTheme, useStyles } from './useStyles';
import IconButton from '@mui/material/IconButton';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ScrollTop from "../components/ScrollTop"
import { Copyright } from "../components/Copyright";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import Container from "@material-ui/core/Container";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

const ColorModeContext = React.createContext({ toggleColorMode: () => { } })

const App = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
      }}
    >
      <header>
        <Header {...props}>
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Header>
      </header>
      <main>
        <Container
          className={classes.appContainer}
          maxWidth="xl"
        >
          {props.children}
        </Container>
      </main>
      <footer>
        <Box
          style={{
            paddingBottom: '1em',
          }}
        >
          <Copyright />
        </Box>
      </footer>
      <ScrollTop {...props}>
        <Fab color="default" size="small" aria-label="scroll back to top">
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
