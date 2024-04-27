import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import logokl from './logokl.png';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const pages = ['About Us', 'Student', 'Councellors', 'Appointments', 'Report', 'Parents info', 'Visitors','AddStudent','UpdateStudent','DeleteStudent'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const About = () => <div>About Us Content</div>;
const Student = () => <div>Student Content</div>;

// Add similar components for other pages...

function ResponsiveAppBar() {
 const [anchorElNav, setAnchorElNav] = React.useState(null);
 const [anchorElUser, setAnchorElUser] = React.useState(null);

 const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
 };

 const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
 };

 const handleCloseNavMenu = () => {
    setAnchorElNav(null);
 };

 const handleCloseUserMenu = () => {
    setAnchorElUser(null);
 };

 return (
    <Router>
      <AppBar position="static" sx={{ backgroundColor: '#87A922' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters style={{ width: '100%' }}>
            <img src={logokl} alt="Logo" style={{ marginRight: '70px', width: '70px', height: '70px' }} />

            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
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
                CVMS
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
                 {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={`/${page.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Typography align="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                 key={page}
                 onClick={handleCloseNavMenu}
                 component={Link}
                 to={`/${page.toLowerCase().replace(/\s+/g, '-')}`}
                 sx={{ my: 2, color: 'white', display: 'block' }}
                >
                 {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
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
                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography align="center">{setting}</Typography>
                 </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/student">
          <Student />
        </Route>
        {/* Add similar routes for other pages... */}
      </Switch>
    </Router>
 );
}

export default ResponsiveAppBar;
