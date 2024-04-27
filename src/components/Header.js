import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';

import logokl from './logokl.png';
import pro from './pro.jpg';

const pages = ['Home','sendMail','users','ATask','SignIn','SignUp','DisplayTask','Dashboard','Status'];
const settings = ['profile', 'account', 'dashboard', 'logout'];

function Header() {
 const navigate = useNavigate();

 const [anchorElNav, setAnchorElNav] = React.useState(null);
 const [anchorElUser, setAnchorElUser] = React.useState(null);

 const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
 };

 const handleCloseNavMenu = () => {
    setAnchorElNav(null);
 };

 const handleCloseUserMenu = () => {
    setAnchorElUser(null);
 };

 const handleMenuClick = (page) => {
    console.log(`Clicked on ${page}`);
    handleCloseNavMenu();
    if (page === 'Appointments') {
      navigate('/appointment');
    } else if (page === 'profile') {
      navigate('/student');
    } else if (page === 'logout') {
      navigate('/Home'); // Navigate to the Home page when logout is clicked
    } else {
      navigate(`/${page.toLowerCase()}`);
    }
 };

 return (
    <AppBar position="fixed" sx={{ backgroundColor: '#00A9FF' }}>
      <Container maxWidth="xl" sx={{ width: '100%' }}> {/* Adjusted width */}
        <Toolbar disableGutters>
          {/* Logo */}
          <img
            src={logokl}
            alt="logokl"
            style={{ marginRight: '10px', height: '50px' }}
          />

          {/* Menu and navigation */}
          <Box sx={{ flexGrow: 1 }}>
            {/* Removed IconButton with TaskAltIcon */}
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
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleMenuClick(page)}>
                 <Typography variant="body1" align="center">
                    {page}
                 </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Site Title */}

          {/* Navigation Buttons */}
          <Box>
            {pages.map((page) => (
              <Button key={page} onClick={() => handleMenuClick(page)} color="inherit">
                {page}
              </Button>
            ))}
          </Box>

          {/* User Menu */}
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} color="inherit">
              <img
                src={pro}
                alt="pro"
                style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              />
            </IconButton>
          </Tooltip>
          <Menu
            id="menu-appbar-user"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={() => handleMenuClick(setting)}>
                <Typography variant="body1" align="center">
                 {setting}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
 );
}

export default Header;
