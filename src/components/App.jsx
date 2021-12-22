import React, { useState } from 'react';
import { withStyles } from '@mui/styles';
import { ThemeProvider } from '@mui/material/styles';
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import Container from "@material-ui/core/Container";
import IconButton from '@mui/material/IconButton';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './../styles/App.css';
import { lightTheme, darkTheme, useStyles } from './useStyles';
import Header from './Header.jsx';
import ScrollTop from "../components/ScrollTop.jsx"
import { Copyright } from "../components/Copyright.jsx";

function App(props) {

  const [theme, setTheme] = useState(lightTheme);
  const [mode, setMode] = useState("light");
  const changeTheme = () => {
    if (mode === 'light') {
      setMode("dark");
      setTheme(darkTheme);
    } else {
      setMode("light");
      setTheme(lightTheme);
    }
  }

  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText
      }}>
      <ThemeProvider theme={theme.palette.mode === 'light' ? lightTheme : darkTheme}>
        <header>
          <Header>
            <IconButton onClick={changeTheme} color="inherit">
              {mode === 'light' ? <LightModeIcon /> : <ModeNightIcon />}
            </IconButton>
          </Header>
        </header>
        <main>
          <Container
            style={{ padding: '0 0 2em 0' }}
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
      </ThemeProvider>
    </div>
  );
}
export default withStyles(useStyles)(App);
