import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import MenuItem from '@mui/material/MenuItem';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const links = ['chronicle', 'people', 'ethnicity', 'propernoun', 'astrogeophy', 'story'];
const pages = { 'chronicle': '大事年表', 'people': '人物介绍', 'ethnicity': '民族演变', 'propernoun': '专有名词', 'astrogeophy': '天文地理', 'story': '小说正文' }
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            待定
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {links.map((link, count) => (
                                    <MenuItem key={count} component={Link} to={'./' + link}>
                                        <Typography textAlign="center">{pages[link]}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h7"
                            noWrap
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            《空泛传说》设定集
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {links.map((link, count) => (
                                <Button
                                    key={count}
                                    component={Link} to={'./' + link}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'inherit', display: 'block' }}

                                >
                                    {pages[link]}
                                </Button>
                            ))}
                        </Box>
                        <IconButton
                            sx={{ ml: 1 }}
                            color="inherit"
                            component={Link}
                            to="/legend-of-void"
                        >
                            <HomeIcon />
                        </IconButton>
                        {props.children}
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    );
};
export default Header;
