import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function AppBarGeneral() {
    // State and hooks
    const [anchorEl, setAnchorEl] = React.useState(null); // state for anchor element of the menu
    const theme = useTheme(); // access the current theme
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // check if the screen size is mobile

    // Event handlers
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget); // set the anchor element when the menu is opened
    };

    const handleMenuClose = () => {
        setAnchorEl(null); // reset the anchor element when the menu is closed
        
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* AppBar */}
            <AppBar position="static" sx={{ opacity: 1, backgroundImage: 'url(/src/images/index2.png)' }}>
                <Toolbar>
                    {isMobile ? (
                        <>
                            {/* Mobile Menu */}
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={handleMenuOpen}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={handleMenuClose} href='/home' 
                                >Home</MenuItem>
                                <MenuItem onClick={handleMenuClose}
                                >About</MenuItem>
                                <MenuItem onClick={handleMenuClose} href='/contact'>Contact Us</MenuItem>
                                <MenuItem onClick={handleMenuClose} >Services</MenuItem>
                                
                            </Menu>
                        </>
                    ) : (
                        <>
                            {/* Desktop Menu */}
                            <Button color="inherit" href='/home'>Home</Button>
                            <Button color="inherit" href='/about'>About</Button>
                            <Button color="inherit" href='/contact'>Contact Us</Button>
                            <Button color="inherit" href='/services'>Services</Button>
                        </>
                    )}
                    <Box sx={{ flexGrow: 1 }} />
                    {/* Register and Login buttons */}
                    <Button color="inherit" href='/register'>Register</Button>
                    <Button color="inherit" href='/login'>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}