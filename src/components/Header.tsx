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
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { routes } from '@/routes/routes';

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="static"
            className='!bg-amber-50'
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img src="/logo.png" className="h-11" alt="Logo"/>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{
                                color: 'black'
                            }}
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
                            {routes.map((page) => (
                                <MenuItem key={page.to} onClick={handleCloseNavMenu}>
                                    <Link to={page.to}> {page.name} </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img src="/logo.png" className="h-11" alt="Logo"/>
                    </Typography>
                    <Box className="items-center justify-between" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Box >
                            <div className="flex items-end justify-between w-14">
                                <a href="www.facebook.com" target="_blank"><img src="/facebook.svg" alt="Facebook icon" className="h-5"/></a>
                                <a href="www.instagram.com" target="_blank"><img src="/instagram.svg" alt="Instagram icon" className="h-5"/></a>
                            </div>
                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {routes.map((page) => (
                                <Button
                                    key={page.to}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'black', display: 'block', fontWeight: '600' }}
                                >
                                    <Link to={page.to}> {page.name} </Link>
                                </Button>
                            ))}
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;